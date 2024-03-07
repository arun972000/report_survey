

import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Button, Modal, Typography } from '@mui/material';
import { IoLocation } from "react-icons/io5";
import "./Content.css"
import logo from "../assets/RI Logo.svg"


const Content = () => {
    const [dropdown1Value, setDropdown1Value] = useState('');
    const [dropdown2Value, setDropdown2Value] = useState('');
    const [modelContent, setModelContent] = useState({
        length: "",
        width: "",
        height: "",
        weight: ""
    })

    const [open, setOpen] = useState(false)


    const handleOpen = () => {
        if (((dropdown1Value == "Chennai" || dropdown1Value == "vizag") && dropdown2Value == "Tata steel Kalinganagar")) {
            setModelContent({ length: 45, width: 7.5, height: 5.9, weight: 300 })
        }
        else if (((dropdown1Value == "Chennai" || dropdown1Value == "vizag") && dropdown2Value == "Tata steel Meramandali")) {
            setModelContent({ length: 30, width: 7.5, height: 5.8, weight: 300 })
        }
        else if (((dropdown1Value == "Chennai" || dropdown1Value == "vizag") && dropdown2Value == "Tata steel Joda")) {
            setModelContent({ length: 30, width: 7, height: 7, weight: 300 })
        }
        else if ((dropdown1Value == "Chennai" && dropdown2Value == "Tata steel Jamshedpur")) {
            setModelContent({ length: 45, width: 6, height: 5.9, weight: 300 })
        }
        else if ((dropdown1Value == "Chennai" && dropdown2Value == "Tata steel Tarapur")) {
            setModelContent({ length: 45, width: 7.5, height: 5.9, weight: 300 })
        }
        else if ((dropdown1Value == "vizag" && dropdown2Value == "Tata steel West Bokaro")) {
            setModelContent({ length: 20, width: 7.3, height: 5.9, weight: 150 })
        }
        else if((dropdown1Value == "Paradip" && dropdown2Value == "Tata steel Meramandali")){
            setModelContent({ length: 45, width: 8, height: 5.9, weight: 300 })
        }
        else if((dropdown1Value == "Paradip" && dropdown2Value == "Tata steel Jharia")){
            setModelContent({ length: 45, width: 7.3, height: 6.3, weight: 300 })
        }
        else if((dropdown1Value == "Paradip" && dropdown2Value == "Tata steel West Bokaro")){
            setModelContent({ length: 20, width: 8.6, height: 6.3, weight: 150 })
        }
        else if((dropdown1Value == "Paradip" && dropdown2Value == "Tata steel Kalinganagar")){
            setModelContent({ length: 20, width: 8.6, height: 6.3, weight: 300 })
        }
        else if((dropdown1Value == "Paradip" && dropdown2Value == "Tata steel Jamshedpur")){
            setModelContent({ length: 20, width: 8.6, height: 6.3, weight: 300 })
        }
        else if((dropdown1Value == "Mumbai Port" && dropdown2Value == "Tata steel Jamshedpur")){
            setModelContent({ length: 45, width: 7, height: 5.5, weight: 300 })
        }
        else if((dropdown1Value == "Mumbai Port" && dropdown2Value == "Tata steel Kalinganagar")){
            setModelContent({ length: 45, width: 8.6, height: 6.1, weight: 300 })
        }
        else if((dropdown1Value == "Mumbai Port" && dropdown2Value == "Tata steel Joda")){
            setModelContent({ length: 45, width: 8.6, height: 6.1, weight: 300 })
        }
        else if((dropdown1Value == "Mumbai Port" && dropdown2Value == "Tata steel Tarapur")){
            setModelContent({ length: 45, width: 6, height: 5.7, weight: 200 })
        }
        else if((dropdown1Value == "Mumbai Port" && dropdown2Value == "Tata steel Ludhiana")){
            setModelContent({ length: 45, width: 6, height: 5.7, weight: 200 })
        }
        else if((dropdown1Value == "Kolkata" && dropdown2Value == "Tata steel Jamshedpur")){
            setModelContent({ length: 45, width: 7.9, height: 5.3, weight: 200 })
        }
        else if((dropdown1Value == "Kolkata" && dropdown2Value == "Tata steel Kalinganagar")){
            setModelContent({ length: 45, width: 8.6, height: 5.8, weight: 200 })
        }
        else if((dropdown1Value == "Kolkata" && dropdown2Value == "Tata steel Ludhiana")){
            setModelContent({ length: 45, width: 5, height: 5.3, weight: 200 })
        }
        else if((dropdown1Value == "Kolkata" && dropdown2Value == "Tata steel Meramandali")){
            setModelContent({ length: 45, width: 8, height: 5.8, weight: 200 })
        }
        else if((dropdown1Value == "Mundra" && dropdown2Value == "Tata steel Ludhiana")){
            setModelContent({ length: 45, width: 8.6, height: 7.5, weight: 200 })
        }
        else if((dropdown1Value == "Mundra" && dropdown2Value == "Tata steel Tarapur")){
            setModelContent({ length: 45, width: 8.6, height: 7.5, weight: 200 })
        }
        else if((dropdown1Value == "Mundra" && dropdown2Value == "Tata steel Jamshedpur")){
            setModelContent({ length: 45, width: 8.6, height: 5.6, weight: 200 })
        }
        else if((dropdown1Value == "Mundra" && dropdown2Value == "Tata steel Kalinganagar")){
            setModelContent({ length: 45, width: 8.6, height: 6.1, weight: 200 })
        }
        setOpen(true)
    }
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleDropdown1Change = (event) => {
        setDropdown1Value(event.target.value);
    };

    const handleDropdown2Change = (event) => {
        setDropdown2Value(event.target.value);
    };
    let value;

    if (dropdown1Value == "Mumbai Port") {

        value = <div className='text-center  mumbai'>
            <p className="city-name">MUMBAI</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown1Value == "Chennai") {

        value = <div className='text-center  chennai'>
            <p className="city-name">CHENNAI</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown1Value == "Kolkata") {

        value = <div className='text-center  kolkata'>
            <p className="city-name">KOLKATA</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown1Value == "Mundra") {

        value = <div className='text-center  mudra'>
            <p className="city-name">MUNDRA</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }

    else if (dropdown1Value == "Paradip") {

        value = <div className='text-center  paradip'>
            <p className="city-name">PARADIP PORT</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown1Value == "Haldia") {

        value = <div className='text-center  haldia'>
            <p className="city-name">HALDIA</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown1Value == "vizag") {

        value = <div className='text-center  vizag'>
            <p className="city-name">VIZAG</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }

    let map2;
    if (dropdown2Value == "Tata steel Kalinganagar") {
        map2 = <div className='text-center  kalinganagar'>
            <p className="city-name">KALINGANAGAR</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown2Value == "Tata steel Meramandali") {
        map2 = <div className='text-center  meramandalai'>
            <p className="city-name">MERAMANDALI</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown2Value == "Tata steel Jamshedpur") {
        map2 = <div className='text-center  jamshedpur'>
            <p className="city-name">JAMSHEDPUR</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown2Value == "Tata steel Nilanchal") {
        map2 = <div className='text-center  nilanchal'>
            <p className="city-name">NILANCHAL</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown2Value == "Tata steel Ludhiana") {
        map2 = <div className='text-center  ludhiana'>
            <p className="city-name">LUDHIANA</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown2Value == "Tata steel Tarapur") {
        map2 = <div className='text-center  tarapur'>
            <p className="city-name">TARAPUR</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown2Value == "Tata steel Joda") {
        map2 = <div className='text-center  joda'>
            <p className="city-name">JODA</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown2Value == "Tata steel West Bokaro") {
        map2 = <div className='text-center  bokaro'>
            <p className="city-name">WEST BOKARO</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown2Value == "Tata steel Khonbond") {
        map2 = <div className='text-center  khonbond'>
            <p className="city-name">KHONBOND</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }
    else if (dropdown2Value == "Tata steel Jharia") {
        map2 = <div className='text-center jharia'>
            <p className="city-name">JHARIA</p>
            <IoLocation size={30} className="location text-danger"/>
        </div>
    }

  



    return (
        <>
        <div className="d-flex flex-column justify-content-center" style={{position:"absolute",top:"60%",left:"70%"}}>

            <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-simple-select-label">From</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={dropdown1Value}
                        label="From"
                        onChange={handleDropdown1Change}
                    >
                        <MenuItem value={"Kolkata"}>KOLKATA</MenuItem>
                        <MenuItem value={"Haldia"}>HALDIA</MenuItem>
                        <MenuItem value={"Mumbai Port"}>MUMBAI PORT</MenuItem>
                        <MenuItem value={"Mundra"}>MUNDRA</MenuItem>
                        <MenuItem value={"Chennai"}>CHENNAI</MenuItem>
                        <MenuItem value={"vizag"}>VIZAG</MenuItem>
                        <MenuItem value={"Paradip"}>PARADIP PORT</MenuItem>
                    </Select>

                </FormControl>
            </div>
            <div >
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-simple-select-label">To</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={dropdown2Value}
                        label="To"
                        onChange={handleDropdown2Change}
                    >
                        <MenuItem value={"Tata steel Kalinganagar"}>TATA STEEL KALINGANAGAR</MenuItem>
                        <MenuItem value={"Tata steel Meramandali"}>TATA STEEL MERAMANDALI</MenuItem>
                        <MenuItem value={"Tata steel Jamshedpur"}>TATA STEEL JAMSHEDPUR</MenuItem>
                        <MenuItem value={"Tata steel Nilanchal"}>TATA STEEL NILANCHAL</MenuItem>
                        <MenuItem value={"Tata steel Ludhiana"}>TATA STEEL LUDHIANA</MenuItem>
                        <MenuItem value={"Tata steel Tarapur"}>TATA STEEL TARAPUR</MenuItem>
                        <MenuItem value={"Tata steel Joda"}>TATA STEEL JODA</MenuItem>
                        <MenuItem value={"Tata steel West Bokaro"}>TATA STEEL WEST BOKARO</MenuItem>
                        <MenuItem value={"Tata steel Khonbond"}>TATA STEEL KHONBOND</MenuItem>
                        <MenuItem value={"Tata steel Jharia"}>TATA STEEL JHARIA</MenuItem>
                    </Select>

                </FormControl>
            </div>
            <div className="ms-3">
                <Button variant="contained" onClick={handleOpen}>Submit</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <div className="d-flex justify-content-between">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <b>MAXIMUM FEASIBLE TRANSPORT DIMENSIONS</b>
                    </Typography>
                    
                <img src={logo} alt="logo" className="img-thumbnail mb-3" width={200} height={200} /></div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr>

                                    <th scope="col">LENGTH(m)</th>
                                    <th scope="col">WIDTH(m)</th>
                                    <th scope="col">HEIGHT(m)</th>
                                    <th scope="col">WEIGHT(T)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td><b>{modelContent.length}</b></td>
                                    <td><b>{modelContent.width}</b></td>
                                    <td><b>{modelContent.height}</b></td>
                                    <td><b>{modelContent.weight}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </Typography>
                </Box>
            </Modal>
            
        </div>
        {value}
        {map2}
        </>
    );
};

export default Content;
