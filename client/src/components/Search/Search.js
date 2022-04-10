import React, { useState , useEffect} from 'react';
import { TextField, Button, Typography, Paper, Grid, InputAdornment, IconButton,AppBar} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import SearchIcon from '@mui/icons-material/Search';
import {useHistory , useLocation} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import {getPostsBySearch} from '../../actions/posts';

 function useQuery() {
   return new URLSearchParams(useLocation().search);

 }

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Search = () => {
    const classes= useStyles();
    const [search, setSearch] = useState('');
    const query=useQuery();
    const history=useHistory();
    const page=query.get('page') || 1;
    const searchQuery= query.get('searchQuery');
    const [tags,setTags]=useState([]);
    const dispatch = useDispatch();
    
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
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        width: '100%',
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item >
          <ButtonBase sx={{ width: 300, height: 200, margin: 1.2 }}>
            <Img alt="work" src="https://cdn.dribbble.com/users/1648363/screenshots/3510409/media/a7d7fe59a9704ca12a2deab63739314f.gif" />
          </ButtonBase>
        </Grid>
        <Grid>
          <AppBar position='static' color='inherit'>
             <TextField  
             name="search"
             variant='outlined'
             label= 'Rechercher ...'
             onKeyPress={handleKeyPress}
             fullWidth
             value={search}
             onChange={(e)=> setSearch(e.target.value)}
             />
             <ChipInput
             style ={{margin: '10px 0'}}
             value={tags}
             onAdd ={handleAdd}
             onDelete={handleDelete}
             label="Rechercher Hachtags"
             variant='outlined'
             />
             <Button onClick={searchPost} color='primary' variant='contained'>
               rechercher 
             </Button>
         </AppBar>
        </Grid>
                
            
        
        
      </Grid>
    </Paper>
  );
}
export default Search;