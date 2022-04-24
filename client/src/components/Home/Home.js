import React ,{useEffect, useState} from 'react';
import {TextField, Button ,Container ,Paper, Grow, Grid , Card, Typography, GridList} from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Posts from '../posts/Posts';
import Form from '../Form/Form';
import {getPosts , getPostsBySearch} from '../../actions/posts'
import Paginate from '../Pagination';
import SearchIcon from '@mui/icons-material/Search';
import {useHistory , useLocation} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import layer1 from '../../images/employe/layer01.svg';
import layer2 from '../../images/employe/layer02.svg';
import layer3 from '../../images/employe/layer03.svg';
import layer4 from '../../images/employe/layer04.svg';
import layer5 from '../../images/employe/layer05.svg';
import layer6 from '../../images/employe/layer06.svg';
import layer7 from '../../images/employe/layer07.svg';
import layer8 from '../../images/employe/layer08.svg';


function useQuery() {
  return new URLSearchParams(useLocation().search);

}


const Home = () => {


    const dispatch= useDispatch();
    const [currentId,setCurrentId]= useState(null);
     const classes= useStyles();
    const [search, setSearch] = useState('');
    const query=useQuery();
    const history=useHistory();
    const page=query.get('page') || 1;
    const searchQuery= query.get('searchQuery');
    const [tags,setTags]=useState([]);
    
    
  const handleKeyPress =(e)=> {
        if (e.keyCode ===13){
          searchPost();
        }
  }
  const handleAdd =(tag)=>{
      setTags([...tags, tag]);
  }
  const handleDelete =(tagToDelete)=>{
     setTags (tags.filter((tag)=> tag!=tagToDelete));
  }
  const searchPost =()=>{
      if(search.trim() || tags){
        dispatch(getPostsBySearch({search , tags: tags.join(',')}));
        history.push(`/posts/search?Query=${search ||'none'}&tags=${tags.join(',')}`);

      } else{
        history.push('/');
      }
  }

  
  
    return ( 
        
        <Container container justify="space-between" alignItems="stretch" spacing={3} maxWidth="1500px">
        
        <Card className={classes.color} >
      <Grid container spacing={3} >
        
        <Grid item  spacing={2} xs={10} sm container>

        
          <Grid item container direction="row" spacing={1} >
            <Grid item className={classes.SearchDiv}>

          <Typography className={classes.titre} variant='h3'style={{color:'rgb(255, 255, 255)'}}>Votre chemin vers le  </Typography>
          <Typography className={classes.titre} variant='h3'style={{color:'rgb(242, 83, 49)'}}>   travail de rêve</Typography>


             <TextField  
             name="search"
             variant='outlined'
             label= 'Rechercher'
             placeholder="Rechercher ..."
             onKeyPress={handleKeyPress}
             fullWidth
             value={search}
             style={{color: 'rgb(255,255,255)'}}

             onChange={(e)=> setSearch(e.target.value)}
             InputLabelProps={{
              style: { color: '#fff' },
            }}
             InputProps={{
              className: classes.textfiled,
              endAdornment: (
                <>
                <ChipInput
                style ={{margin: '10px 0'}}
                value={tags}
                onAdd ={handleAdd}
                onDelete={handleDelete}
                label="Rechercher Hachtags"
                variant="outlined"
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                InputProps={{ className: classes.textfiled}}
                />
                <Button onClick={searchPost} color='secondary' >
                <SearchIcon />
                </Button>
                </>
               )}}
             />
          </Grid>
          </Grid>
        </Grid>
        <Grid item  spacing ={1}>
         
          <div className={classes.parallax} mx-auto style={{maxwidth: '526px' }}>
                <div className={classes.parallax}  data-depth="0.1"><img src={layer1} alt="Layer" /></div>
                <div className={classes.Player} data-depth="0.16"><img className={classes.image} src={layer2} alt="Layer"/></div>
                <div className={classes.Player} data-depth="0.38"><img className={classes.image} src={layer3} alt="Layer"/></div>
                <div className={classes.Player} data-depth="0.16"><img className={classes.image} src={layer4} alt="Layer"/></div>
                <div className={classes.Player} data-depth="0.16"><img className={classes.image} src={layer5} alt="Layer"/></div>
                <div className={classes.Player} data-depth="0.45"><img className={classes.image} src={layer6} alt="Layer"/></div>
                <div className={classes.Player}data-depth="0.3"><img className={classes.image} src={layer7} alt="Layer"/></div>
                <div className={classes.Player} data-depth="0.2"><img className={classes.image} src={layer8} alt="Layer"/></div>
              </div>
          
        </Grid>
      </Grid>
    </Card>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          {(!searchQuery && !tags.length) &&(
                 <Card >
                 <Paginate page={page} />
             </Card>
          )}
          
          <Form  currentId={currentId} setCurrentId={setCurrentId} />

          
        </Container>

      
     );
}
 
export default Home;


