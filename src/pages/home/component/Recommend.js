import React,{Component} from 'react';


import {connect} from 'react-redux';
import {RecommendWrapper,RecommendItem} from '../style';

class Recommend extends Component{
    render(){
        return(
            <RecommendWrapper>

                {
                    this.props.recommendImg.map((item)=>{
                        return(
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                        )
                    })
                }

            </RecommendWrapper>
        )
    }
}

const mapStateToProps=(state)=>{
  return ({
      recommendImg:state.get('home').get('recommendImg'),
  })
};
export default connect(mapStateToProps,null)(Recommend);