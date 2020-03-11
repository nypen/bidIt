import * as React from 'react';
import {TextField,Container,Paper,Grid,Button, Typography} from '@material-ui/core';
import { User } from '../models';
interface FormItemStateProps {
    user:User,
};

interface FormItemDispatchProps {
    postitem: (userId:string,name: string,
         description: string,
         country:string,
         duration:string,
         firstbid:string,
         categoryid:string,
         buyprice?: string ) => void;
         routetohome: () => void;
}

type FormItemProps = FormItemStateProps & FormItemDispatchProps;

  

const FormItem: React.FunctionComponent<FormItemProps> = (props: FormItemProps) => {
    const [name, setName] = React.useState<string>("");
    const [buyPrice, setBuyPrice] = React.useState<string>("");
    const [lowBid, setLowBid] = React.useState<string>("");
    const [descr, setDescr] = React.useState<string>("");
    const [hours,setHours] = React.useState("");
    const [minutes,setMinutes] = React.useState("");
    const [itemPosted,setItemPosted] = React.useState(false);

    const clickPostItem = (event:any) => {
        props.postitem(props.user.id,name, descr,"Algeria"//props.user.country
            ,hours+":"+minutes+":59.9999999",lowBid,buyPrice);
        setItemPosted(true);
        
    };
    return(
        <Container>
        {
            itemPosted ?
            <Paper><Typography color = "primary" align = "center">Your item was succesfully posted! Auction is running.</Typography></Paper>
            :''
        }
        <Paper style={{marginTop:30,height:550}}>
            <h1 style={{marginTop:20,marginLeft:100}}>Post an Item</h1>
        <Grid container direction="row" justify="space-around" alignItems="flex-start">
            <Grid item>
            <Grid container direction="column" justify="space-between" alignItems="flex-start" spacing={3}>
                <Grid item>
                    <TextField required placeholder="Ex. Vintage Record Player" name="name"
                    variant="outlined" fullWidth
                    id="itemTitle" label="Item Title" autoFocus value={name} onChange={(event) => setName(event.target.value)}/>
                </Grid>
                <Grid item>
                    <TextField placeholder="Ex. 100" name="buyPrice"
                    variant="outlined" fullWidth
                    id="buyPrice" label="Buy Price(€)" helperText="If buy price '\n is bidded , the bidder wins the auction"
                    value={buyPrice} onChange={(event) => setBuyPrice(event.target.value)}/>
                </Grid>
                <Grid item>
                    <TextField required placeholder="Ex. 100" name="lowBid"
                    variant="outlined" fullWidth type="number"
                    id="lowBid" label="Lowest Bid(€)" helperText="Lowest price of bids"
                    value={lowBid} onChange={(event) => setLowBid(event.target.value)}/>
                </Grid>
                <Grid item>
                    <TextField required style={{width:300}} multiline rows={5} autoComplete="Description" name="description"
                    variant="outlined" fullWidth
                    id="description" label="Description" 
                    value={descr} onChange={(event) => setDescr(event.target.value)}/>
                </Grid>
            </Grid>
            </Grid>
            <Grid item>
            <Grid container direction="column" justify="center" alignItems="flex-start" spacing={3}>
                <Grid item>
                    <Typography>Duration</Typography>
                    <Grid container direction="row" justify="space-around" alignItems="center" spacing={2}>
                        <Grid item>
                            <TextField required id="endTime" label="Hours" type="number" defaultValue="1"
                            InputLabelProps={{ shrink: true, }} value={hours} onChange={(event)=>setHours(event.target.value)}
                            inputProps={{ step: 1, min: 0, max: 23 }} />                        
                        </Grid>
                        <Grid item>
                            <TextField required id="endTime" label="Minutes" type="number" defaultValue="1"
                            InputLabelProps={{ shrink: true, }} value={minutes} onChange={(event)=>setMinutes(event.target.value)}
                            inputProps={{ step: 1, min: 0, max: 59 }} />                        
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography>Photograph</Typography>
                    <input type="file" ></input>
                </Grid>
                <Grid item>
                    <Button style={{marginLeft:90,marginTop:50}} type="submit" fullWidth variant="contained" color="primary"
                    onClick={clickPostItem}>Post Item</Button>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        </Paper>
        </Container>
    );

}

export {
    FormItem,
    FormItemStateProps,
    FormItemDispatchProps,
}