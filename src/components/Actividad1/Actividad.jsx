import React from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
import {ICol, IRow} from '../Grid'
import ButtonRadio from '../ButtonRadio'
// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
// import interaction from './Actividad_interactions'
import Tooltip from '../Tooltip'

import Data from './Actividad_data'
import PreguntaTF from '../PreguntaTF'
import { useState } from 'react'


const Actividad_base = ({staticContext, ...props}) => {
    
    const [modalFlag, setModal] = useState(false)
    const [passed, setPassed] = useState(false)
    const [visible, mostrarTooltip] = useState(false)
    const [visible1, mostrarTooltip1] = useState(false)
    const [visible2, mostrarTooltip2] = useState(false)
    const [visible3, mostrarTooltip3] = useState(false)
    const [visible4, mostrarTooltip4] = useState(false)

    const setChecked = (id, button) => {
        const data = Data[id]

        if(button === 0 && data.answer === 'true'){
            data.right = 1
        }else if(button === 1 && data.answer === 'false'){
            data.right = 1
        }else if(button === 2 && data.answer === 'na'){
            data.right = 1
        }else{
            data.right = 0
        }
    }

    const checkActivity = () => {
        var count = 0;
        var right = 0;
        Data.map((data) => {
            if(data.right === 1){
                count ++
                right ++
            }else{
                setPassed(false)
                count ++
            }

            if(right === Data.length){
                setPassed(true)
                setModal(true)
            }else if(count === Data.length){
                setModal(true)
            }
        })
    }

    const list = Data.map((data, i) => {
        return (
            <IRow justify={'flex-start'} className="inline_list" pt={2} key={i} className="items">
                <ICol w={50}>
                    <div> <p>  {i + 1}). {data.text} </p></div>
                </ICol>
                <ICol w={50} px={2}>
                    <ButtonRadio className="btn true" setCheckedState={setChecked} arrId={i} buttonId={0} nameb={'radio_button' + i} text={'TRUE'} />
                    <ButtonRadio className="btn false" setCheckedState={setChecked} arrId={i} buttonId={1} nameb={'radio_button' + i} text={'FALSE'} />
                    <ButtonRadio className="btn nm" setCheckedState={setChecked} arrId={i} buttonId={2} nameb={'radio_button' + i} text={'N/M'} />
                </ICol>
            </IRow>
            )
    })
 
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={48}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Click the icons to read the description of each app, then answer' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.reload()} } />
            </UiButtonsContainer>
            
          
            <IRow pt={2}>
                <MainTitle color={Ilex.violeta2}>
                    CLICK AND READ THE DESCRIPTIONS OF THE APPS AND INDICATE IF THE STATEMENTS ARE TRUE, FALSE OR NOT MENTIONED.
                </MainTitle>
            </IRow>

            <IRow pt={1} justify="center">
                <ICol w={30} px={3} className="app" >
                    <div className="a1" onClick={() => mostrarTooltip(!visible)}>
                        <Tooltip visible={visible} >
                            <h6>Any.do (size: Twenty-three MB)</h6>
                            <p>This app helps you organize your time. There are three main sections in the app. In the To-do list section, there are lists, tasks and reminders. In the Calendar section, you can plan your day, week and month. Finally, there is an assistant section. This assistant gives you recommendations for stores, restaurants or places so you can complete your activities. The app is free only for seven days, after that you need to pay some money. The app is available for android, and IOS. Also, if you prefer you can download it in your computer!
                            </p>
                        </Tooltip>
                    </div>
                    <div className="a2" onClick={() => mostrarTooltip1(!visible1)}>
                        <Tooltip visible={visible1} >
                            <h6>SKRWT (size: six MB)</h6>
                            <p>
                            With this app, you can edit your photos and make them look professional. The app costs one dollar with ninety-nine cents but there are many people who have it on their smartphones now. There are two main things that you can achieve: good symmetry and perfect lines. Users of the popular app Instagram love it. There aren’t many advanced features so it is easy to use. Iphone and Android users can get the app.
                            </p>
                        </Tooltip>
                    </div>
                    <div className="a3" onClick={() => mostrarTooltip2(!visible2)}>
                        <Tooltip visible={visible2} >
                            <h6>Headspace (size: Twenty.ine MB) </h6>
                            <p>
                            This app focuses on your mental health through meditation. When you first download the app there are three basic sections to explore. After you cover the basics, you can move to the other sections. There are seven categories: health, brave, happiness, work, students, headspace pro, and sport. In each category there is a list of guided meditation audios to listen. The app is free but you need to subscribe to have full access to all of the app’s features. It is available in both app and play store.
                            </p>
                        </Tooltip>
                    </div>
                    <div className="a4" onClick={() => mostrarTooltip3(!visible3)}>
                        <Tooltip visible={visible3}>
                            <h6>Mint (size: varies with device)</h6>
                            <p>
                            This is the perfect app to have your finances in order. There are different things you can do with this app. You can create budgets and obtain recommendations, you can add your bills, get alerts and pay them through the app and also you can check your credit score. The app is free but there are only two countries where it is available: Canada and the United States. You can download the app from play store and app store. 
                            </p>
                        </Tooltip>
                    </div>
                    <div className="a5" onClick={() => mostrarTooltip4(!visible4)}>
                        <Tooltip visible={visible4} >
                            <h6>Poweramp (size: Five MB)</h6>
                            <p>
                            This app is a music player for Android. The app is not free, but there is a trial of fifteen days. After the free period, you need to pay three dollars with ninety-nine cents. There isn’t a version for iPhone. There are many formats which are supported by the app, for example mp3, mp4/m4a, ogg, wma,wav, etc. There are other features that let you customize the sound of your music. Also there is one feature that makes it possible to add the songs’ lyrics. 
                            </p>
                        </Tooltip>
                    </div>
                </ICol>

                <ICol w={70} px={5}>
                    {list}
                </ICol>
            </IRow>
            <IRow pt={7.3} >
                <ICol pt={1} onClick={checkActivity} ><ButtonCheck className="check" /></ICol>
            </IRow>
            <PreguntaTF visibility={modalFlag}  answers={Data} passed={passed} repeatUrl={'#/actividad1'} nxtUrl={'#/actividad2'} />
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad