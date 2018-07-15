import styled from 'styled-components';

export const HomeWrapper=styled.div`
    width: 960px;
    margin: 0 auto;
     
    overflow:hidden;
    margin-top:30px;
`;

export const HomeLeft=styled.div`
    float: left;
    width: 625px;
     
    .banner-img{
        height:270px;
        width:625px;
        z-index:-1；
    }
`;

export const HomeRight=styled.div`
    float: right;
    width: 280px;
    
`;
export const TopicWrapper=styled.div`
      
    overflow:hidden;
    padding: 20px 0 10px 0;
    margin-left: -16px;
    
    
`;
export const TopicItem=styled.div`
    margin-left: 18px;
    float:left;
    background:#f7f7f7;
    height:32px;
    padding-right:16px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius:4px;
    margin-bottom:20px;
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
      
    }

`;


//文章列表

export const ListItem=styled.div`
    padding :20px 0;
   
    overflow:hidden;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius:5px;
    }
     border-bottom: 1px solid #dcdcdc;
     :hover{
         opacity: 0.6;
          box-shadow:0px 2px 2px darkgray;
    }
`;

export const ListInfo=styled.div`
     width: 500px;
     float:left;
     
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        color: #999;
        margin-top: 10px;
    }
     

`;

export const RecommendWrapper=styled.div`
    width: 280px;
`;

export  const RecommendItem=styled.div` 
    margin-bottom: 10px;
    border-radius:5px;
    width: 280px;
    height: 50px;
    background: url(${(props)=>props.imgUrl});//接收组件传来的属性
`;


export const WriterWrapper=styled.div`
    width:278px；
    border: 1px solid #dcdcdc;
    border-radius:3px;
     height: 300px;
    line-height: 300px;
    text-align: center;
    
    background-color: cornsilk;
    
`;

export const LoadMore=styled.div`
    width: 100%;
    height: 43px;
    line-height: 43px;
    text-align: center;
    border-radius: 20px;
    margin: 30px 0px;
    border: 2px solid #dcdcdc;
    :hover{
       opacity: 0.6;
       box-shadow:0px 2px 2px darkgray;
    }

`;


export const BackTop=styled.div`

    position: fixed;
    bottom: 100px;
    right: 80px;
    height: 80px;
    width: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    :hover{
       opacity: 0.6;
        
       box-shadow:0px 2px 2px darkgray;
    }

`;