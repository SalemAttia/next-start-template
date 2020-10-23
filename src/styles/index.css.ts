import css from 'styled-jsx/css'

const style = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
  .center {
    width: 60%;
    text-align: center;
    margin: 5% auto;
  }

  .h-tag {
    padding: 5px;
    background: green;
    margin: 1px 5px;
    color: #fafafa;
  }
`

export default style
