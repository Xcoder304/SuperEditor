import React from 'react'
import { Button } from '@mui/material'

const MainContent = (props)=>{
    console.log(props.DarkModeVal)

    function ToUpperCaseFun(){
        let ChangeTxt = CurrentTxt.toUpperCase()
        SetCurrentTxt(ChangeTxt)
    }

    function ToLowerCaseFun(){
        let ChangeTxt = CurrentTxt.toLowerCase()
        SetCurrentTxt(ChangeTxt)
    }

    
    function ToCapitalizeFun(){
        let ChangeTxt = CurrentTxt.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        SetCurrentTxt(ChangeTxt)
    }

    function CopyTheTxt(){
        let CopyTxt = document.getElementById('textarea')
        CopyTxt.select()
        document.execCommand('copy')
    }

    function RemoveExtraSpaceFun(){
        let RemoveSpace = CurrentTxt.split(/[ ]+/)
        SetCurrentTxt(RemoveSpace.join(" "))
    }


    const [CurrentTxt,SetCurrentTxt] = React.useState('')

    return(
        <section className={props.DarkModeVal ? "MainContentSec" : "MainContentSec DarkMode"}>
            <h1>Enter Your Text here</h1>

            <div className='txtEditorWapper'>
                <textarea onChange={(e)=>SetCurrentTxt(data => e.target.value)} id="textarea" value={CurrentTxt} ></textarea>
            </div>

            <div className='ButtonWapper' style={{marginTop:"10px", gap:"12px"}}>

            <Button variant="contained" size="medium" onClick={ToUpperCaseFun}>To UpperCase</Button>

            <Button variant="contained" size="medium" onClick={ToLowerCaseFun}>To LowerCase</Button>

            <Button variant="contained" size="medium" onClick={ToCapitalizeFun}>To capitalize</Button>

            <Button variant="contained" size="medium" onClick={CopyTheTxt}>Copy</Button>

            <Button variant="contained" size="medium" onClick={RemoveExtraSpaceFun}>Remove Extra Spaces</Button>


            </div>

            <div className='Countwapper'>
                <h1>total Word: <span>{CurrentTxt.split(" ").filter((elm)=> elm.length!=0).length}</span></h1>
                <h1>total characters: <span>{CurrentTxt.length}</span></h1>
                <h1>take time to read in: <span>{0.008 * CurrentTxt.split(" ").length} mins</span></h1>
            </div>

            <div className='perviewSec'>
                <h1>See the perview here</h1>
                <p>{CurrentTxt}</p>
            </div>

        </section> 
    )
}

export default MainContent