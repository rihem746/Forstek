import { makeStyles } from "@material-ui/core/styles";

export default makeStyles (()=>({
    ul:{
        justifyContent: 'space-around',
    },
    titre:{
      textAlign:'center',
    },
    textfiled:{
      color:'#fee',
      backgroundColor:'#282435',
    },
    root: {
        
        backgroundColor:'#444',
        
      },
      color: {
        backgroundColor:'rgb(31, 27, 45)',
      },
    
      Input: {
        width: '97%',
        margin: '10px 0',
      },
      Form: {
        display:'block',
        textAlign: 'center',
        margin: '10px 0',
      },
      Text:{
    
      },
      SearchDiv:{
        margin:'auto ',
        color: 'rgb(255,255,255)',
        width: '90%',
      },
      parallax:{ 
        position:'relative'},
      Player:{
        position:'absolute',
        top:'0',
        left:'0',
        width:'100%' ,
        height:'100%',
      },
      image:{
        display:'block',
        width:'100%',
      },
    
    
}));