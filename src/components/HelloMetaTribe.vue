<template>
  <div>
      <el-row >
        <el-col :span="8">
        <el-row>
          <div class="grid-content bg-purple left-container" >
            <div >
              <img src="../assets/logo-color.png">
              <br />
              <div class="div-font"  width="80%" >{{language==1?titleZH:titleEN}}</div>
            </div>
            <div >
               <el-radio-group v-model="language">
                <el-radio-button label="1">中文</el-radio-button>
                <el-radio-button label="0">English</el-radio-button>
              </el-radio-group>
              <ul class="div-font">
                <li v-for="menu in language==1?menuZH:menuEN">
                  <a :href="'#'+menu.id">{{menu.desc}}</a>
                </li>
              </ul>
            </div>
          </div>
          </el-row>
          <el-row> 
           <div class="block left-container img-container" >
                <el-carousel trigger="click" height="400px" class="img-postion" >
                  <el-carousel-item v-for="item in metaWarrior" :key="item.url" >
                    <img :src="item.url" />
                  </el-carousel-item>
                </el-carousel>
               <span v-if="language==1"  class="demonstration div-font" >Meta Warrior是Web3加速器成员身份体系</span>
               <span v-else class="demonstration div-font" >Meta Warrior is a Web3 Accelerator membership system</span>
              </div>
        </el-row>
          <el-row> 
           <div class="block left-container img-container" >
              <el-carousel trigger="click" height="400px" class="img-postion">
              <el-carousel-item v-for="item in events" :key="item.url">
                    <img :src="item.url" />
                  </el-carousel-item>
              </el-carousel>
              <span v-if="language==1"  class="demonstration div-font" >MetaTribe往期活动</span>
              <span v-else class="demonstration div-font" >Past MetaTribe Events</span>
            </div>
        </el-row>
        <el-row>
          <div class="block left-container img-container" style="border: 1px solid #ffffff60;" >
             <div style="margin-top: 15px;">
               <span v-if="language==1"  class="demonstration div-font" >合作伙伴</span>
               <span v-else class="demonstration div-font" >Partner</span><br/>
             </div>
            
             <img src="../assets/partner.png" /> 
             
          </div>
        </el-row>
          </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-card class="box-card divCard" :shadow="shadow">
              <div id="#metatribe"  class="content">
                <!-- <h1>MetaTribe</h1> -->
                <div>
                  <img src="../assets/font-metatribe.png" alt="dddd" class="img img-top" >
                  <!-- <div class="divTitle div-font">MetaTribe</div> -->
                  <div >{{language==1?metatribeZH.content1:metatribeEN.content1}}<br />
                  {{language==1?metatribeZH.content2:metatribeEN.content2}}<br />
                  </div>
                  <div style="margin-top:20px;font-size: 16px;">
                    <el-row style="margin-bottom: 5px;">
                      <el-col :span="14"><li class="el-icon-news li-noborder"></li>{{language==1?metatribeZH.content3:metatribeEN.content3}}</el-col>
                      <el-col :span="10"> <li class="el-icon-news li-noborder"></li>{{language==1?metatribeZH.content4:metatribeEN.content4}}</el-col>
                   </el-row>
                   <el-row style="margin-bottom: 5px;">
                      <el-col :span="14"><li class="el-icon-news li-noborder"></li>{{language==1?metatribeZH.content5:metatribeEN.content5}}</el-col>
                      <el-col :span="10"> <li class="el-icon-news li-noborder"></li>{{language==1?metatribeZH.content6:metatribeEN.content6}}</el-col>
                   </el-row>
                   <el-row style="margin-bottom: 5px;">
                    <el-col :span="14"><li class="el-icon-news li-noborder"></li>{{language==1?metatribeZH.content7:metatribeEN.content7}}</el-col>
                      <el-col :span="10"> <li class="el-icon-news li-noborder"></li>{{language==1?metatribeZH.content8:metatribeEN.content8}}</el-col>
                   </el-row>
                  </div>
                </div>
              </div>
            </el-card>

             <el-card class="box-card divCard" :shadow="shadow">
               <div style="text-align: left;" id="#web3"  class="content">
                <!-- <h1>Web3.0加速器</h1> -->
                <img v-if="language==1" class="img" src="../assets/web3-red.png" style="margin-bottom: 20px;">
                <img v-else class="img" src="../assets/web3-en.png" style="margin-bottom: 20px;">
                <!-- <div class="divTitle div-font">Web3.0加速器</div> -->
                <div>{{language==1?web3ZH.content1:web3EN.content1}}
                  <br />
                  <img v-if="language==1" src="../assets/web3-white.png" alt="dddd" class="img img-top" >
                  <img v-else src="../assets/mt-en.png" alt="dddd" class="img img-top" >
                  {{language==1?web3ZH.content2:web3EN.content2}}
                </div>
              </div>
             </el-card>
            <el-card class="box-card divCard" :shadow="shadow">
              <div style="text-align: left;" id="#mt"  class="content">
                <div class="divTitle div-font" style="margin-bottom: 0;" >{{language==1?mtZH.title:mtEN.title}}</div>
                <div>
                  <el-row v-if="language==1">
                    <el-col :span="10"><div > {{language==1?mtZH.content1:mtEN.content1}}</div> </el-col>
                    <el-col :span="14"><img  class="img img-top"   src="../assets/mt.png" alt="dddd"></el-col>
                  </el-row>
                  <el-row v-else>
                    <div> {{language==1?mtZH.content1:mtEN.content1}}</div> 
                  </el-row>
                </div>
              </div>
            </el-card>
            <el-card class="box-card divCard" :shadow="shadow">

              <div style="text-align: left;" id="#service"  class="content">
               <div class="divTitle div-font" >{{language==1?serviceZH.title:serviceEN.title}}</div>
                <div>
                  <h4>{{language==1?serviceZH.content1:serviceEN.content1}}</h4>
                  {{language==1?serviceZH.content2:serviceEN.content2}}。<br />
                  {{language==1?serviceZH.content3:serviceEN.content3}}<br />
                  <div style="font-weight: 700;">{{language==1?serviceZH.content4:serviceEN.content4}}
                  </div>
                </div>
                <div>
                  <h4>{{language==1?serviceZH.content5:serviceEN.content5}}</h4>
                  <div>
                  {{language==1?serviceZH.content6:serviceEN.content6}}<br />
                  {{language==1?serviceZH.content7:serviceEN.content7}}<br />
                  </div>
                  <div style="margin-top:20px;font-size: 16px;">
                    <el-row style="margin-bottom: 5px;">
                      <el-col :span="14"><li class="el-icon-news li-noborder"></li>{{language==1?serviceZH.courses1:serviceEN.courses1}}</el-col>
                      <el-col :span="10"> <li class="el-icon-news li-noborder"></li>{{language==1?serviceZH.courses2:serviceEN.courses2}}</el-col>
                   </el-row>
                   <el-row style="margin-bottom: 5px;">
                      <el-col :span="14"><li class="el-icon-news li-noborder"></li>{{language==1?serviceZH.courses3:serviceEN.courses3}}</el-col>
                      <el-col :span="10"> <li class="el-icon-news li-noborder"></li>{{language==1?serviceZH.courses4:serviceEN.courses4}}</el-col>
                   </el-row>
                   <el-row style="margin-bottom: 5px;">
                    <el-col :span="14"><li class="el-icon-news li-noborder"></li>{{language==1?serviceZH.courses5:serviceEN.courses5}}</el-col>
                      <el-col :span="10"> <li class="el-icon-news li-noborder"></li>{{language==1?serviceZH.courses6:serviceEN.courses6}}</el-col>
                   </el-row>
                  </div>
                </div>
                <div>
                  <h4>{{language==1?serviceZH.content8:serviceEN.content8}}</h4>
                  {{language==1?serviceZH.content9:serviceEN.content9}}
                </div>
              </div>
            </el-card>
            <el-card class="box-card divCard" :shadow="shadow">

              <div style="text-align: left;" id="#contact"  class="content">
                <h2 class="divTitle">{{language==1?contactZH.title:contactEN.title}}</h2>
                <div>
                  Twitter:@metatribe6465 <br />
                  E-mail:metatribebd@yahoo.com
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <el-row style="text-align: center;">©MetaTribe</el-row>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      shadow:'never',
      language:1,  //1 ：中文   0 ：英文


      titleEN:'Web3.0 developer and creator community organization',
      titleZH:'Web3.0开发者和创作者社区组织',
      menuZH:[{id:'#MetaTribe',desc:'MetaTribe'},
               {id:'#web3',desc:'Web3.0加速器'},
               {id:'#mt',desc:'M.T 社区'},
               {id:'#service',desc:'服务'},
               {id:'#contact',desc:'联系方式'}],
      menuEN:[{id:'#MetaTribe',desc:'MetaTribe'},
               {id:'#web3',desc:'Web3.0 Accelerator'},
               {id:'#mt',desc:'M.T Communit'},
               {id:'#service',desc:'Service'},
               {id:'#contact',desc:'Contact'}],

      metatribeZH:{
        content1:"MetaTribe (M.T) 是Web3创业DAO，我们致力于成为优秀的Web3开发者和创作者的社区组织",//1/2需要代表显示的行
        content2:"主要任务和业务",
        content3:"Web3.0开发者和创作者教育（行业研究、课程研发） ",
        content4:"Web3.0开发者和创作者线下活动",
        content5:"Web3.0项目亚太中文社区市场营销",
        content6:"Web3.0项目亚太中文社区hackathon",
        content7:"Web3.0项目顾问、孵化、投资",
        content8:"M.T社区运",
      },
      metatribeEN:{
        content1:"MetaTribe (M.T) is a Web3 startup DAO, we are committed to being a community organization for excellent Web3 developers and creators",//1/2需要代表显示的行
        content2:"Main tasks and business",
        content3:"Web3.0 developer and creator education (industry research, curriculum development",
        content4:"Web3.0 developers and creators offline activities",
        content5:"Web3.0 Project Asia Pacific Chinese Community Marketing",
        content6:"Web3.0 Project Asia Pacific Chinese Community hackathon",
        content7:"Web3.0 project consultant, incubation, investment",
        content8:"M.T Community Movement",
      },
      web3ZH:{
        content1:"Web3加速器是专注于推动Web3在亚太中文社区普及和发展的组织机构，使命是：加速中文Web3发展和领先地位。机构诞生于“双创周”由MetaTribe与中国创业者大会联合发起，获得工信部门支持。目前在北京、上海、深圳、杭州、成都、郑州、大连、西安等城市均有Web3城市双创社区。Web3加速器由来自硅谷、中国互联网名企及加密产业圈的科学家、产品、开发者、及运营专家自发组成，成员精通Web3研究、产品设计、研发和运营工作。当前Web3加速器主要任务是在中文社区开展Web3科普及教育工作。",//1/2需要代表显示的行
        content2:"“2022 中国高校Web3加速营”是由Web3加速器推出的面向中国高校在校生的技能提升及创业孵化项目。我们目标是通过该项计划培养一批优秀的Web3基础技术人才，为中文社区Web3发展播下火种。该项目具有一定公益性。",
      },
      web3EN:{
        content1:'Web3 Accelerator is an organization that focuses on promoting the popularization and development of Web3 in the Asian-Pacific Chinese community. Its mission is to accelerate the development and leading position of Chinese Web3. The institution was born in the "Double Creation Week", '+"which was jointly initiated by MetaTribe and the China Entrepreneurs Conference, and was supported by the Ministry of Industry and Information Technology. Currently, there are Web3 urban entrepreneurship and innovation communities in Beijing, Shanghai, Shenzhen, Hangzhou, Chengdu, Zhengzhou, Dalian, Xi'an and other cities. The Web3 Accelerator is composed of scientists, products, developers, and operation experts from Silicon Valley, China's famous Internet companies and the encryption industry circle. The members are proficient in Web3 research, product design, R&D and operation. The main task of the current Web3 accelerator is to carry out Web3 popularization and education work in the Chinese community.",//1/2需要代表显示的行
        content2:'"2022 Chinese University Web3 Accelerator Camp" is a skill improvement and entrepreneurial incubation project for Chinese college students launched by the Web3 Accelerator. Our goal is to cultivate a group of outstanding Web3 basic technical talents through this plan, sowing the fire for the development of Web3 in the Chinese community. The project has a certain public interest.',
      },
      mtZH:{
        title:"M.T 社区",
        content1:"M.T 社区期望孵化和链接不同类型的DAO组织，并为其提供DAO发起及治理、数字身份、数字牌照、社交、通信、跨组织协作等工具。M.T社区将帮助开发者和创作者更便捷协作并实现个体价值最大化、最终成为通往Web3的入口。",
      },
      mtEN:{
        title:"M.T Community",
        content1:"The M.T community expects to incubate and link different types of DAO organizations, and provide them with tools such as DAO initiation and governance, digital identity, digital licenses, social networking, communication, and cross-organizational collaboration. The M.T community will help developers and creators collaborate more easily and maximize their individual value, ultimately becoming the gateway to Web3.",//1/2需要代表显示的行
      },
      contactZH:{
        title:"联系方式",
      },
      contactEN:{
        title:"Contact",
      },
      serviceZH:{
        title:"服务与案例",
        content1:"Web3项目营销",
        content2:"MetaTribe营销团队由来自Binance、Huobi、BCH、DOGE等加密社区及4A公司的资深市场专家组成，为Web3项目提供亚太区市场拓展策略、营销与PR、活动策划与执行、社区运营及BD服务，团队拥有丰富的实战经验及媒体、社区资源，是亚太区最专业的Crypto营销团队。",
        content3:"目前服务客户：",
        content4:"Binance 、Huobi、FTX、BCH、Dfinity、Solana、Flow、Trx、Bitmain、Filcoin、Agoric、Fodl、NEO、Metamoundo、Cryptovoxels、Merit Circle、Celo、Infinity Force",
        content5:"课程研发及推广",
        content6:"MetaTribe课程研发团队由来自Crypto社区资深开发者及行研专家组成，通过课程助力Web3项目拓展开发者社区、丰富项目生态系统",
        content7:"当前课程：",
        content7:"活动",
        content9:"MetaTribe 提供线上及线下活动策划及落地执行，主要服务活动类型：项目路演、Meetup、Afterparty及面向开发者的：开放日、Hackthon ",
        courses1:"《Web3入门及案例解析》",
        courses2:"《元宇宙二十五讲》",
        courses3:"《联盟链开发入门+实战》",
        courses4:"《以太坊开发入门+实战》",
        courses5:"《IC开发入门+实战》",
        courses6:"《Flow开发入门+实战》",
      },
       serviceEN:{
        title:"Services and Cases",
        content1:"Web3 Project Marketing",
        content2:"The MetaTribe marketing team is composed of senior market experts from crypto communities such as Binance, Huobi, BCH, DOGE, and 4A companies, providing Asia-Pacific market expansion strategies, marketing and PR, event planning and execution, community operations and BD services for the Web3 project. The team With rich practical experience and media and community resources, it is the most professional Crypto marketing team in the Asia-Pacific region.",
        content3:"Currently serving customers",
        content4:"Binance 、Huobi、FTX、BCH、Dfinity、Solana、Flow、Trx、Bitmain、Filcoin、Agoric、Fodl、NEO、Metamoundo、Cryptovoxels、Merit Circle、Celo、Infinity Force",
        content5:"Course development and promotion",
        content6:"The MetaTribe course R&D team is composed of senior developers and industry research experts from the Crypto community. Through the course, the Web3 project helps the Web3 project to expand the developer community and enrich the project ecosystem.",
        content7:"Current courses:",
        content8:"Activity",
        content9:"MetaTribe provides online and offline event planning and implementation, the main service event types: Project Roadshow, Meetup, Afterparty and for developers: Open Day, Hackthon",
        courses1:"Web3 Introduction and Case Analysis》",
        courses2:"Twenty-Five Lectures on the Metaverse",
        courses3:"Introduction to Alliance Chain Development + Actual Combat",
        courses4:"Introduction to Ethereum Development + Actual Combat》",
        courses5:"Introduction to IC Development + Actual Combat",
        courses6:"Introduction to Flow Development + Actual Combat",
      },
      metaWarrior:[
        {url:require("../assets/1.png")},
        {url:require("../assets/2.png")},
        {url:require("../assets/3.png")},
        {url:require("../assets/4.png")},
        {url:require("../assets/5.png")},
      ],
       events:[
        {url:require("../assets/event1.png")},
        {url:require("../assets/event2.png")},
        {url:require("../assets/event3.png")},
        {url:require("../assets/event4.png")},
        {url:require("../assets/event5.png")},
        {url:require("../assets/event6.png")},
        {url:require("../assets/event7.png")},

      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-row {
    margin-bottom: 20px;
    color: #f4efef;
    
  }
  .content {
    color:#f4efef;
    text-align: left;
    /* border: 1px solid  #f4efef2b ;
    margin-bottom: 60px; */
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #121D23;
  }
  .left-container {
    float: right;
    margin-right: 20%;
    margin-left: 30%;
  }
  ul {
    list-style: none;
    margin: 100px 0 0 0;
    padding:inherit;
    
    }

  li {
    border-bottom:1px solid #ffffff3d;
    text-align: left;
    padding: 8px;
    }
    a {
    color: #f4efef;
    text-decoration: none;
    }
    a:hover {
      color: cornflowerblue;
    }

    .el-card  {
      margin-bottom: 50px!important;
      background-color: #121D23;

    }
    .img {
      clear: both; 
      display: block; 
      margin:auto;
      /* margin-bottom: 40px; */
    }
     .img-top {
      /* margin-top: 40px; */
    }
    .divTitle {
      text-align: center;
      margin-bottom: 20px;
      font-size: 24px;
    }
    .li-noborder {
      border-bottom:1px solid #ffffff00;
      color: dodgerblue;
    }
    .divCard {
      padding: 10px 0 10px 0;

    }
    .div-font {
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      font-weight: 700;
    }
    .img-container {
      margin-top: 60px;
      width: 400px;
    }
    .img-postion {
      margin:20px 0 20px 0 ;
      color: #ffffff60
    }

</style>
