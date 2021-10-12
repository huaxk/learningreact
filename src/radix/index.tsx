import { styled, theme } from './stitches.config';

const Button = styled('button', {
  borderRadius: '9999px',
  lineHeight: '1',
  fontWeight: 500,
  border: '0',

  variants: {
    color: {
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        backgroundColor: 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
    size: {
      small: {
        fontSize: '13px',
        height: '25px',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      large: {
        fontSize: '15px',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
    },
  },
});



const App = () => (
  <>
    <Button color="gray" size="small">Button</Button>
    <Button color="violet" size="small">Button</Button>
    <Button color="gray" size="large">Button</Button>
    <Button color="violet" size="large">Button</Button>
  </>
)

export default App;