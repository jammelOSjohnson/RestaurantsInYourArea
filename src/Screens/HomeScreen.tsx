import {useEffect} from 'react';
import { useAppData } from '../Context/AppDataContext';



export default function HomeScreen() {
    var {value} = useAppData();
    var { getAddress, Address } = value;

    useEffect(function(){
        if(Address === "" || Address === null|| Address === undefined){
            getAddress(value);
        }   
        
    }, []);

    if(Address !== "" && Address !== null && Address !== undefined){
        return (
            <div className="container-fluid" style={{marginTop: "3%"}}>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Address here" value={Address} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
               
            </div>
        )
    }else{
        return (
            <div className="container-fluid" style={{marginTop: "3%"}}>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Address here"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
               
            </div>
        )
    }
}
