import Styled from 'styled-components'

export const BgContainer = Styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
`
export const H1 = Styled.h1`
font-family:Bree Serif:
text-align:center;
color:#4c63b6;
`
export const InputContainer = Styled.form`
width:70vw;
display:flex;
flex-direction:column;
justify-content:center;
padding:15px;
gap:10px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`
export const Input = Styled.input`
border:none;
width:300px;
padding:10px;
`
export const TextArea = Styled.textarea`
border:none;
padding:10px;
`
export const Button = Styled.button`
border:none;
background-color:#4c63b6;
padding:10px;
width:100px;
color:white;
border-radius:5px;
align-self:flex-end;
`
export const OutputContainer = Styled.div`
width:70vw;
height:60vh;

`
export const Ul = Styled.ul`
display:flex;
justify-content:flex-start; 
list-style:none;
gap:20px;
flex-wrap:wrap;
padding-left:0px;
`
export const EMPTY = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:50px;
`
