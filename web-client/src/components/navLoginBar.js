import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import {Modal, TextField } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        left: `50%`,
        top: `25%`,
        width:`40%`,
        height:'50vh',
        transform: `translateX(-50%)`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor:`#303030`,
        borderRadius:`30px`
    },
    card:{
        borderRadius:20,
        width: `15vw`,
        height: `15vw`,
        marginBottom:`3%`
    },
    cardcontent:{
        height:10,
    },
    whiteText:{
        color: `white`,
    },
    multilineColor:{
        color:'white'
    }

}));

const NavLoginBar=(props)=> {
    const classes = useStyles();
 
    //console.log(post.tags)
    const [open, setOpen] = useState(false);
    const[option,setOption]=useState(null);
    const handleOpen = (props) => {
        if(props === 'login'){
            setOption(true);
        }else{
            setOption(false)
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container className="navBackground" fluid>
            <Row className="justify-content-center">
            <Col xs={8}>                
                <h1 className="roboto" style={{fontSize:'36px',fontWeight:`900`,marginLeft:'50px',marginTop:'20px'}}>ezeats</h1>
            </Col>
           
            <Col xs={2}>
            <button style={{backgroundColor:'transparent', border:'white 1px solid'}}className="endButton" color="secondary"  onClick={(e)=>handleOpen("login")}>login</button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={{textAlign:'center'}} className={classes.paper}>
                {option && <h1 style={{color:`white`,marginTop:'40px',fontWeight:900,fontSize:`60px`}}>ezeats</h1>}
                {option && <h2 style={{color:`white`,fontSize:'24px',fontWeight:500}}>log into your account</h2>}
                {option && <TextField InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }} style={{color:`white`}} placeholder="email"> </TextField>}
                <br/>
                {option && <TextField InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }} className={classes.whiteText} placeholder="password"></TextField>}
              <Link to="/home">  {option && <button onClick={handleClose} className="endButton"style={{color:`white`, padding:`10px`}}>login</button>}</Link>
                


                {!option && <h1 style={{color:`white`,marginTop:'10px',fontWeight:900,fontSize:`60px`}}>ezeats</h1>}
                {!option && <h2 style={{color:`white`,fontSize:'24px',fontWeight:500}}>create your account</h2>}
                {!option && <TextField InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }} style={{color:`white`}} placeholder="full name"> </TextField>}
                <br/>
                {!option && <TextField InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }} style={{color:`white`}} placeholder="email"> </TextField>}
                <br/>
                {!option && <TextField InputProps={{
                    classes: {
                        input: classes.multilineColor
                    }
                }} className={classes.whiteText} placeholder="password"></TextField>}
                {!option && <button onClick={handleClose} className="endButton"style={{color:`white`, padding:`10px`}}>sign up</button>}
                </div>
            </Modal>
            </Col>
            <Col xs={2}>
            <button className="endButton" color="primary" onClick={(e)=>handleOpen('signup')}>sign up </button>
            </Col>

            </Row>
        </Container>
    );
} 

export default NavLoginBar;