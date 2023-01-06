import styled from 'styled-components'

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  display:flex;
  flex-direction: ${props=> props.flexCol ? "column":"row"};
  border-width: ${props=> props.debug ? "thin":"none"};
  padding: 1rem;
  background: white;
`;

/* export const AppLayout = styled.section`

.item1 { grid-area: header; height:2vh;}
.item3 { grid-area: main; min-height: 75vh}
.item4 { grid-area: right; min-height: 75vh}
.item5 { grid-area: footer; height:3vh;}

.grid-container {
  
  display: grid;
  grid:
  'header header header header header header'
  'main main main right right right' 
  'footer footer footer footer footer footer';
  grid-gap: 0.15rem;
  background-color: black;
  padding: 0.2rem;
  min-height:99vh;
  max-height:99vh;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding: 20px 0;
  font-size: 1.2rem;
}
`; */

export const Theme = {
    color:{
        black:'#051619',
        ice:'#F9FBFB',
        pale:'#BCE9EB'
    },
    bg:{
        light:'#F2F7F5'
    }

  };
  

export const AppLayout = styled.section`

.item1 { grid-area: header; height:2vh;}
.item3 { grid-area: content; min-height: 75vh; margin-bottom:40px}
.item5 { grid-area: footer; height:3vh;}

.grid-container {
  
  display: grid;
  grid:
  'header '
  'content' 
  'footer ';
  grid-gap: 0.15rem;
  background-color: black;
  padding: 0.2rem;
  min-height:99vh;
  max-height:99vh;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding: 20px 0;
  font-size: 1.2rem;
}
`;

export const MainSectionFlex=styled.section`

display:flex;
flex-direction:column;
align-items: center;
justify-content: center;

`;

export const PanelFlex=styled.section`

display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
//border:solid;
height:calc(100vh - 80px);
width:calc(50vw);

`;

export const PanelGridLeft=styled.section`

  display: grid;
  grid-template-rows: 2fr 6fr 4fr;
  grid-template-areas: 
            "top"
            "center"
            "bottom";
  //border: 1px solid hotpink;
  height:calc(100vh - 85px);
  width:calc(50vw);
  

  #top    { grid-area: top;}
  #center { grid-area: center;}
  #bottom { grid-area: bottom; }


`;

export const PanelGridRight=styled.section`

  display: grid;
  grid-template-rows: 2fr 10fr 2fr 2fr;
  grid-template-areas: 
            "top"
            "list"
            "totals"
            "button";
  //border: 1px solid hotpink;
  height:calc(100vh - 85px);
  width:calc(50vw);
  gap:0;
  

  #top    { grid-area: top;    }
  #list   { grid-area: list;   }
  #totals { grid-area: totals; }
  #button { grid-area: button; }


`;


export const ContentSectionRow=styled.section`

display:flex;
flex-direction:${props => props.swap ? 'row-reverse' : 'row'};
align-items: center;
justify-content: space-between;
margin-bottom:40px;
position: fixed;
bottom:0;
gap:20px;
`;



/*     <Label>
      <Input defaultChecked />
      <LabelText>Foo</LabelText>
    </Label>
    <Label>
      <Input defaultChecked />
      <LabelText $mode="dark">Foo</LabelText>
    </Label> */
const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`

const CheckboxInput = styled.input.attrs({ type: "checkbox" })``;


const LabelCheckbox = styled.span`
  ${(props) => {
    switch (props.$mode) {
      case "dark":
        return styled.css`
          background-color: black;
          color: white;
          ${CheckboxInput}:checked + && {
            color: blue;
          }
        `;
      default:
        return styled.css`
          background-color: white;
          color: black;
          ${CheckboxInput}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;

const Spinner = ()=>{

    return (
        <div class="bg-gray-200 w-full min-h-screen flex justify-center items-center relative">
 
        <svg class="w-16 h-16  animate-spin text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.75V6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M17.1266 6.87347L16.0659 7.93413" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M19.25 12L17.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M17.1266 17.1265L16.0659 16.0659" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12 17.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.9342 16.0659L6.87354 17.1265" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6.25 12L4.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.9342 7.93413L6.87354 6.87347" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>

  
</div>
    )
}



