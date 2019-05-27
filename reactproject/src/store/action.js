import axios from "axios";

export let action1 = ({dispatch, url, params, typename}) => {
    let p = params ? axios({url, params}) : axios({url});
    let teamArr = (arr,num)=>{
        var l = arr.length;
        var result=[];
        for(var i=0;i<l;i+=num) {
          result.push(arr.slice(i,i+num))
        }
        return result;
      }
    p.then(
      res => {
        dispatch({type: typename, payload: teamArr(res.data.page_data,10)});
        dispatch({type: 'VIEW_LOADING', payload: false})
      }
    );
  
    return {type: 'VIEW_LOADING', payload: true}
  };

export let action2 = ({typename, url, params}) => (dispatch) => {

dispatch({type: 'VIEW_LOADING', payload: true});

return axios({url, params}).then(
    res => {

    dispatch({type: typename, payload: res.data});

    dispatch({type: 'VIEW_LOADING', payload: false});

    return res.data.error
    }
)
};

export let action3 = ({dispatch, url, params, typename}) => {
  let p = params ? axios({url, params}) : axios({url});
  p.then(
    res => {
      var newRes;
      Array.isArray(res.data.page_data) ? newRes=res.data.page_data : newRes=new Array(res.data.page_data)
      dispatch({type: typename, payload: newRes});
      dispatch({type: 'VIEW_LOADING', payload: false})
    }
  );

  return {type: 'VIEW_LOADING', payload: true}
};
