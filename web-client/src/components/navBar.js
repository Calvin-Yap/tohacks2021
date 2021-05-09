import React, {useState} from 'react';
import { Modal } from '@material-ui/core'
import SearchBar from "material-ui-search-bar";
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import '../assets/navBar.css'
import AddEntry from './addEntry'
import { makeStyles } from '@material-ui/core/styles';
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        left: `50%`,
        top: `2%`,
        width:`50%`,
        height:'90vh',
        transform: `translateX(-50%)`,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor:`#303030`,
        borderRadius:`30px`,
        color: `white`
    },


}));
const NavBar=(props)=> {
    const classes = useStyles();
 
    //console.log(post.tags)
    const [open, setOpen] = useState(false);
    const handleOpen = (props) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container className="navBackground" fluid>
            <Row className="justify-content-center">
            <Col xs="2">                
                <h1 className="font">ezeats</h1>
            </Col>
            <Col xs="6">
            <SearchBar
                placeholder="whatcha craving??"
                autoFocus
                className="searchBar"
            />
            </Col>
            <Col xs={1}>
            <button style={{backgroundColor:'transparent', color:'white', border:'none', marginTop:'30%'}} color="primary" ><FavoriteBorderIcon/> Faves</button>
            </Col>
            <Col xs={1}>
            <button style={{backgroundColor:'transparent', color:'white', border:'none', marginTop:'30%'}} onClick={handleOpen} color="primary" ><AddIcon/>Upload </button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div  className={classes.paper}>
                    <AddEntry/>
                </div>
            </Modal>
            </Col>
            <Col xs={2}>
            <Link to="/quiz"> <button className="endButton" color="primary" >what should i eat? </button></Link>
            </Col>

            </Row>
        </Container>
    );
} 

export default NavBar;