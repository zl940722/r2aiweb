import React from "react";
import { makeStyles } from "@material-ui/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles({
  content: {
    padding: "5rem 0 12.3125rem",
    textAlign: "center",
    "& p": {
      color: "#333",
      fontSize: "2.1rem"
    }
  },
  main: {
    display: "flex",
    justifyContent: "center",
    "& dt,& dd": {
      padding: "0 3.1875rem",
      flex: "1 0",
      "& >div":{
        position:'relative',
        height:'9.125rem',
        width:'34rem',
        float:'right',
      }
    },
    "& dt": {
      borderRight: "1px solid #ff3366",
      '& >div':{
        clear:'both'
      }
    },
    "& i": {
      width: "1rem",
      height: "1rem",
      border: "1px solid #747e8d",
      borderRadius: "50%",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position:'absolute',
      right: '-3.8rem',
      "& span": {
        display: "block",
        width: "0.4rem",
        height: "0.4rem",
        backgroundColor: "#ff5600",
        borderRadius: "50%"
      }
    },
    '& img':{
      height:'2.25rem',
      display: 'block',
      float: 'right',
      '& + div':{
        clear:"both",
        textAlign:'left',
        color:'#666',
        paddingTop:'1.875rem',
        width:'34rem',
        float:'right',
      }
    },
    '& label':{
      float:'right',
      fontWeight:'bold',
    },
    "& dd": {
      '& >div':{
        clear:'both',
        float:"none",
      },
      '& i':{
        left:' -3.7rem',
      },
      '& img':{
        float:'none',
        '& +div':{
          float:'none',
        }
      }
    },
  }
});

function Assessment() {
  const classes = useStyles();
  return (
    <section className={classes.content}>
      <p>客户评价</p>
      <dl className={classes.main}>
        <dt>
          <div>
            <i>
              <span />
            </i>
            <img src="/static/images/home/JAKROO.png" alt=""/>
            <div>
              由R2.ai的AI技术驱动的AI Designer (人工智能设计师)将彻底改变我们所知的图形设计行业。通过提供几乎无限的设计风格方案，它大大加快了定制设计流程并显着提升了我们的竞争优势。
            </div>
            <label>-定制服装公司首席运营官 Derek Wiseman</label>
          </div>
          <div/>
          <div>
            <i>
              <span />
            </i>
            <img src="/static/images/home/shuzun.png" alt=""/>
            <div>
              R2.ai端到端的自动机器建模工具R2 Learn是对传统拖拽式模型引擎的一次全面超越和创新。其纯自动化的建模方式让我们不仅分钟级建立金融风控模型，而且模型结果高质、专业。
            </div>
            <label>
              -数尊信息科技联合创始人、 副总裁龚学敏
            </label>
          </div>
        </dt>
        <dd>
          <div style={{float:'none'}}/>
          <div style={{float:'none'}}>
            <i>
              <span />
            </i>
            <img src="/static/images/home/pingan.png" alt=""/>
            <div>
              R2.ai的新一代人工智能自动建模产品正在为平安智能健康大数据分析平台赋能。我们因此得以快速、准确、自动地建立机器学习模型，充分运用大数据为个人医疗风险画像更新迭代，以有效预测并发症和风险程度。
            </div>
            <label>
              -平安医疗首席医疗官郑毅
            </label>
          </div>
          <div/>
          <div style={{height:0,float:'none'}}>
            <i>
              <span />
            </i>
          </div>
        </dd>
      </dl>
    </section>
  );
}

export default Assessment;
