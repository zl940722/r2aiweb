import React, { useState, Fragment, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import _ from "lodash";
import { Icon } from 'antd'

import SimpleInput from "../../Components/SimpleInput";
import SimpleSelect from "../../Components/SimpleSelect";
import SimpleButton from "../../Components/SimpleButton";
import SimpleDialog from "../../Components/SimpleDialog";
import Router from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      fontSize: "2.25rem",
      textAlign: "center",
      margin: "2rem 0"
    },
    bg: {
      backgroundSize: "cover",
      backgroundPosition: "50%",
      backgroundRepeat: "no-repeat",
      fontSize: "1rem"
    },
    container: {
      width: "61.12%",
      background: "#F5F5F5",
      margin: "0 auto",
      marginBottom: 95
    },
    dense: {
      marginTop: 19
    },
    grids: {
      margin: "0 auto"
    },
    grid: {
      margin: "2.5rem auto",
      cursor: "pointer"
    },
    button: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2.5rem"
    },
    content: {
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 2
    },
    title: {
      marginTop: 30,
      padding: '60px 30px 30px',
      fontSize: 24,
      lineHeight: 1
    },
    icon: {
      display: 'inline-block',
      width: 30,
      height: 30,
      lineHeight: "30px",
      borderRadius: "50%",
      background: '#80b031',
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 20
    },
    query: {
      display: 'inline-block',
      cursor: 'pointer',
      color: 'blue'
    }
  })
);
const Types = {
  Electric: '增值税电子普通发票',
  Paper: '增值税纸质普通发票'
};

const Invoice = {
  Personal: '个人',
  Company: '单位'
};

export default function Invoices(res) {
  const classes = useStyles();
  const [values, setValues] = React.useState<any>({
    language: "zh-CN",
    type: "Electric",
    invoice: 'Personal'
  });
  const [personal, setPersonal] = useState({
    name: "",
    bankNo: "",
    address: "",
    phone: "",
  })

  const [offical, setOffical] = useState({
    personNo: "",
    name: '',
    bankNo: "",
    address: "",
    phone: "",
  })

  const [finish, setFinish] = useState(false)
  const [url, setUrl] = useState('')
  const [fpqqlsh, setFpqqlsh] = useState(null)

  const arr: Array<string> = [];
  const [checkErrorList, setCheckErrorList] = React.useState(arr);
  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>, invalid: boolean) => {
    setValues({ ...values, [name]: event.target.value });
    let tempList: Array<string> = invalid ? _.chain(checkErrorList).concat(name).uniq().value() : _.pull(checkErrorList, name);
    setCheckErrorList(tempList);
  };

  const handleChangePersonal = (name: string) => (event: React.ChangeEvent<HTMLInputElement>, invalid: boolean) => {
    setPersonal({ ...personal, [name]: event.target.value });
    let tempList: Array<string> = invalid ? _.chain(checkErrorList).concat(name).uniq().value() : _.pull(checkErrorList, name);
    setCheckErrorList(tempList);
  };

  const handleChangeOffical = (name: string) => (event: React.ChangeEvent<HTMLInputElement>, invalid: boolean) => {
    setOffical({ ...offical, [name]: event.target.value });
    let tempList: Array<string> = invalid ? _.chain(checkErrorList).concat(name).uniq().value() : _.pull(checkErrorList, name);
    setCheckErrorList(tempList);
  };

  const [dialogInfo, setDialogOpen] = React.useState({
    open: false,
    content: "",
    type: ""
  });

  const [error, setError] = useState({
    error: false,
    redirect: false,
    message: ''
  })
  const [orderIds, setOrderIds] = useState(null)

  useEffect(() => {
    // const { user } = res
    // if (!user) {
    //   return
    // setError({
    //   error: true,
    //   redirect: true,
    //   message: '请先登录'
    // })
    // }
    axios.get(`/user/invoices`).then(res => {
      const { data } = res
      if (data.status === 200) setOrderIds(data.orderIds)
      else setError({
        error: true,
        redirect: false,
        message: '没有可开的发票'
      })
    })
      .catch(() => {
        setError({
          error: true,
          redirect: true,
          message: '请先登录'
        })
      })
    // const {data} = res
    // if(data.status !== 200) {
    //   Router.replace("/")
    // }
  }, [])

  useEffect(() => {
    if (error.error)
      setDialogOpen({
        open: true,
        content: error.message,
        type: "warning"
      });
  }, [error])


  const required = ['type', 'invoice']
  const otherRquired = values.invoice === 'Personal' ? ["name", "phone"] : ["personNo", "name", "address", "phone"]
  required.splice(required.length, 0, ...otherRquired)

  const submit = () => {
    const inputData = Object.assign({ orderIds }, values, values.invoice === 'Personal' ? personal : offical)
    const requiredValues = _.chain(inputData).pick(required).values().compact().value();
    if (requiredValues.length < required.length || checkErrorList.length > 0) {
      setDialogOpen({
        open: true,
        content: "以上选项包含必填项，请正确填写。",
        type: "warning"
      });
    } else {
      axios.post("/user/invoices", inputData).then((res: any) => {
        const { status, message, fpqqlsh } = res
        if (status === 200) {
          setFinish(true)
          setFpqqlsh(fpqqlsh)
        } else {
          setDialogOpen({
            open: true,
            content: message,
            type: "warning"
          });
        }
      })
    }
  };

  const queryInvoiceStatus = () => {
    axios({
      method: 'post',
      data: { invoiceNos: fpqqlsh },
      url: '/user/invoice/queryInvoiceStatus'
    })
      .then((res) => {
        const data = res.data;
        if (data.result === 'error') {
          return setDialogOpen({
            open: true,
            content: data.errorMsg,
            type: "warning"
          })
        }
        const url = data.list[0].c_url;
        if (!url) {
          return setDialogOpen({
            open: true,
            content: '发票生成中请重新查询',
            type: "warning"
          })
        }
        setUrl(url)
      }).catch((e) => setDialogOpen({
        open: true,
        content: e.response.data,
        type: "warning"
      }));
  }

  return finish ?
    <FinishContent url={url} online={values.type === 'Electric'} queryInvoiceStatus={queryInvoiceStatus} />
    : <div className={classes.bg}>
      <div className={'all_title'} style={{ margin: '63px auto' }}>增值税普通发票</div>
      <form className={classes.container} noValidate>
        <Grid container className={classes.grids}>
          <Grid item xs={10} className={classes.grid}>
            <SimpleSelect
              label="发票类型"
              xs={12}
              className={classes.dense}
              value={values.type}
              onChange={handleChange("type")}
              data={Types}
              margin="normal"
            />
            <SimpleSelect
              label="发票抬头"
              xs={12}
              className={classes.dense}
              value={values.invoice}
              onChange={handleChange("invoice")}
              data={Invoice}
              margin="normal"
            />
            {values.invoice === 'Personal' ?
              <Fragment>
                <SimpleInput
                  value={personal.name}
                  label="购方名称"
                  required={_.includes(required, "name")}
                  allowedLength={32}
                  regex={/^[\s\S]*.*[^\s][\s\S]*$/}
                  helperText="购方名称不能为空"
                  className={classes.dense}
                  onChange={handleChangePersonal("name")}
                  margin="dense"
                />
                <SimpleInput
                  value={personal.bankNo}
                  label="购方银行账号"
                  required={_.includes(required, "bankNo")}
                  allowedLength={32}
                  className={classes.dense}
                  onChange={handleChangePersonal("bankNo")}
                  margin="dense"
                />
                <SimpleInput
                  value={personal.address}
                  label="购方地址"
                  required={_.includes(required, "address")}
                  allowedLength={32}
                  className={classes.dense}
                  onChange={handleChangePersonal("address")}
                  margin="dense"
                />
                <SimpleInput
                  value={personal.phone}
                  label="收票人手机"
                  required={_.includes(required, "phone")}
                  allowedLength={32}
                  regex={/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/}
                  helperText="收票人手机不能为空"
                  className={classes.dense}
                  onChange={handleChangePersonal("phone")}
                  margin="dense"
                />
              </Fragment> :
              <Fragment>
                <SimpleInput
                  value={offical.personNo}
                  label="纳税人识别号"
                  required={_.includes(required, "personNo")}
                  allowedLength={32}
                  regex={/^[\s\S]*.*[^\s][\s\S]*$/}
                  helperText="纳税人识别号不能为空"
                  className={classes.dense}
                  onChange={handleChangeOffical("personNo")}
                  margin="dense"
                />
                <SimpleInput
                  value={offical.name}
                  label="购方名称"
                  required={_.includes(required, "name")}
                  allowedLength={32}
                  regex={/^[\s\S]*.*[^\s][\s\S]*$/}
                  helperText="购方名称不能为空"
                  className={classes.dense}
                  onChange={handleChangeOffical("name")}
                  margin="dense"
                />
                <SimpleInput
                  value={offical.bankNo}
                  label="购方银行账号"
                  required={_.includes(required, "bankNo")}
                  allowedLength={32}
                  className={classes.dense}
                  onChange={handleChangeOffical("bankNo")}
                  margin="dense"
                />
                <SimpleInput
                  value={offical.address}
                  label="购方地址"
                  required={_.includes(required, "address")}
                  allowedLength={32}
                  regex={/^[\s\S]*.*[^\s][\s\S]*$/}
                  helperText="购方地址不能为空"
                  className={classes.dense}
                  onChange={handleChangeOffical("address")}
                  margin="dense"
                />
                <SimpleInput
                  value={offical.phone}
                  label="收票人手机"
                  required={_.includes(required, "phone")}
                  allowedLength={32}
                  regex={/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/}
                  helperText="收票人手机不能为空"
                  className={classes.dense}
                  onChange={handleChangeOffical("phone")}
                  margin="dense"
                />
              </Fragment>}
            <div className={classes.button}>
              <SimpleButton
                onClick={_.debounce(submit, 1000)}
                label={"提交"}
              />
            </div>
          </Grid>
        </Grid>
      </form>
      <SimpleDialog
        dialogInfo={dialogInfo} setOpen={() => {
          setDialogOpen({
            open: false,
            content: "",
            type: ""
          })
          if (error.error) Router.push(`${error.redirect ? '/login?redirect=/invoices' : '/'}`)
        }} />
    </div>
}


const FinishContent = ({ url, online, queryInvoiceStatus }) => online ?
  <InvoicedSuccess queryInvoiceStatus={queryInvoiceStatus} url={url} /> : <ApplySuccessContent />;

const InvoicedSuccess = ({ url, queryInvoiceStatus }) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.title}>
        <div className={classes.icon}><Icon type="check" /></div>
        <span>发票开具成功</span>
      </div>
      <div>
        <div>我们已经安排将发票发送至您的购买邮箱，请注意查收。</div>
        {
          url ? <div>
            <span>您的发票已开出，请点击查看</span>
            <a href={url} target="_blank" download="发票">查看发票</a>
          </div> :
            <div>
              <span>该发送过程可能会有延迟,您也可以直接：</span>
              <div className={classes.query} onClick={queryInvoiceStatus}>查询发票</div>
            </div>
        }
        <div>
          如果您遇到什么问题，请通过发送邮件至support@r2.ai来联系我们
        </div>
      </div>
    </div>
  )
}

const ApplySuccessContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.title}>
        <div className={classes.icon}><Icon type="check" /></div>
        <span>申请开具增值税纸质普通发票成功</span>
      </div>
      <div >
        <div>我们已经将您的相关信息转交给财务</div>
        <div>发票会在两到三个工作日内开出并寄往您填写的购方地址，请注意查收。</div>
        <div>
          如果您遇到什么问题，请通过发送邮件至support@r2.ai来联系我们
        </div>
      </div>
    </div>
  )
};
