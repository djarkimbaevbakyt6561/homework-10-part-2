import styled from "styled-components"
const Button = (props) => {
    const {marginTop, marginRight, onClick, children } = props
    return (
        <ButtonForExpense onClick={onClick} style={{marginTop: marginTop, marginRight: marginRight }}>{children}</ButtonForExpense>
    )
}
export default Button
const ButtonForExpense = styled.button`
  padding: 12px 26px;
  color: aliceblue;
  background: #00C914;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  `