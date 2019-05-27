let reducer = (state,action) => {

    let {type,payload} = action;
  
    switch (type) {
  
      case 'VIEW_LOADING' :
        return Object.assign({},state,{bLoading: payload });
  
      case 'VIEW_HEAD' :
        return Object.assign({},state,{bNav: payload });
  
      case 'VIEW_FOOT' :
        return Object.assign({},state,{bFoot: payload });
  
      case 'UPDATE_HOME' :
        return Object.assign({},state,{home: payload });
  
      case 'UPDATE_TUIJIAN' :
        return Object.assign({},state,{tuijian: payload });
  
      case 'UPDATE_COLUMN' :
        return Object.assign({},state,{column: payload });
  
      case 'UPDATE_DETAIL' :
        return Object.assign({},state,{detail: payload });
  
      case 'UPDATE_NAV' :
        return Object.assign({},state,{nav: payload });
  
      case 'UPDATE_USER' :
        return Object.assign({},state,{user: payload });
  
  
      default:
        return state
    }
  };
  
  export default reducer;