import styled, {css} from 'styled-components'
// eslint-disable-next-line
import Ilex from '../../App/variables'
// eslint-disable-next-line
import animations from './Actividad_animations'

const mistyles = css`
.hide{
    display: none;
}
.btn {
  top: 0;
  margin-left: 0.1em;
  line-height: 1;
  text-align: center;
  display: inline-block;
  border-radius: 0.5em;
  box-shadow: 0 0.05em 0 0 ${Ilex.color_gris_input};
  border: solid 0.1em ${Ilex.color_gris_input};
  width: auto;
  padding: 0.5em;
  font-weight: bold;
  &.true{
    background: ${Ilex.verde};
    color: white;
    &:hover{
        background: #43BA98;
    }
  }
  &.false{
    background: ${Ilex.color_rosa_speaking};
    color: white;
    &:hover{
        background: #933650;
    }
  }
  &.nm{
    background: ${Ilex.color_rosa_radios};
    color: white;
    &:hover{
        background: #6A35B3;
    }
  }
}
.items{
    margin-top: -1em;
    font-family: ${Ilex.font};
    color: ${Ilex.textos};
}
.check{
    margin-top: -4em;
}
.app{
    background-image: url(./src/apps.png);
    background-repeat: no-repeat;
    height: 30em;
    margin-top: 3em;    
    transform: translateX(2.5em);
}
.a1{
    margin-top:6em;
    margin-left: 4.5em;
    width: 3em;
    height: 3em;
    cursor: pointer;
}
.a2{
    margin-top: -1em;
    margin-left: 8.7em;
    width: 3em;
    height: 3em;
    cursor: pointer;
}
.a3{
    margin-top: 1.5em;
    margin-left: 5.5em;
    width: 3em;
    height: 3em;
    cursor: pointer;
}
.a4{
    margin-top: -1.2em;
    margin-left: 10em;
    width: 3em;
    height: 3em;
    cursor: pointer;
}
.a5{
    margin-top: 1em;
    margin-left: 7em;
    width: 3em;
    height: 3em;
    cursor: pointer;
}
p, h6{
    font-family: ${Ilex.font};
    font-size: ${Ilex.font_size};
}

`

export const DraggablesContainer = styled.div`
    width: 90%;
    margin: auto;
    padding: 0.4em 1em;
    text-align:center;
`

export const AreasContainer = styled(DraggablesContainer)`

    display:flex;
    justify-content:center;
    align-items: center ;
`

export const ProgressbarContainer = styled.div`
    width: 60%;
    margin:auto;
`

export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    position:absolute;
    right:${props => props.right || '1.6' }em;
    top:${props => props.top || '1' }em;
    z-index: 2000;

`

export default {mistyles , DraggablesContainer, AreasContainer, ProgressbarContainer}