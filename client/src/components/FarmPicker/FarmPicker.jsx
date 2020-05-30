import React , {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from  '@material-ui/core'
import styles from './FarmPicker.module.css'
import { windfarms } from '../../api'

const FarmPicker = ({handleWindfarmChange}) => {
    const [fetchedWindfarms, setFetchedWindfarms] = useState([]);
    useEffect(()=> {
        const fetchWindfarms= async  () => {
                setFetchedWindfarms(await windfarms())
        }
        fetchWindfarms();
    },[setFetchedWindfarms])
    return (
        <FormControl className= {styles.formControl}>
            <NativeSelect defaultValue="" onChange = {(e) => handleWindfarmChange(e.target.value)}> 
                <option value= "all">All</option>
                {fetchedWindfarms.map((windfarms,i ) => <option key = {i} value={windfarms}> {windfarms}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default FarmPicker;