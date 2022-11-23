import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import accordion from "./components/accordion/Accordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";


//function declaration
function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
           {/* <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
            />*/}
          {/*  <Accordion titleValue={"Users"} collapsed={false}/>
             <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
           {/*  <OnOff />
            <OnOff />*/}
           <UncontrolledAccordion  titleValue={'Menu'}/>
            <UncontrolledAccordion  titleValue={'Users'}/>
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*!/*/}
            {/*  <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>*/}
         {/*   <OnOff />*/}
           {/* <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
