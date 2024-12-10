import { TitleStyled } from "./Title.Styled";

export const Title = ({textValue}) => {

    return(
        <TitleStyled>
            <h1>{textValue}</h1>
        </TitleStyled>
    )
}