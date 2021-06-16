import React, {useState} from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router";
import cn from 'classnames';
import {IconSearch, IconVisualSearch} from "../../../icons";

const SearchBox = ({shape}) => {

    const history = useHistory();

    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/photos/${value}`)
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <Container className={cn("searchBox", shape)}>
            <Form onSubmit={onSubmit}>
                <Button>
                    <IconSearch/>
                </Button>
                <Label>
                    <Input type="text"
                           onChange={onChange}
                           value={value}
                           placeholder={"search free high-resolution photos"}
                    />
                </Label>
                <Button>
                    <IconVisualSearch/>
                </Button>
            </Form>
        </Container>
    )
}


const Container = styled.div`
  flex: 1;
  &.round {
    margin-left: 20px;
    margin-right: 30px;
  }
  &.square {
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  border: 1px solid transparent;
  transition: 0.2s;

  .round & {
    border-radius: 19px;
    background: #eee;
  }

  .square & {
    border-radius: 6px;
    background:#fff;
  }

  &:hover {
    .round & {
      border-color: #d1d1d1;
    }

    .square & {
      box-shadow: 0 0 0 5px rgb(0 0 0 / 10%);
    }
  }
`;

const Button = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  transition: 0.3s;
  svg {
    fill: #767676;
    .round & {
      width: 20px;
      height: 20px;
    }
    .square & {
      width: 28px;
      height: 28px;
    }
  }

  &:hover {
    svg {
      fill: #111;
    }
  }
`;

const Label = styled.label`
  flex: 1;
  .round & {
    height: 38px;
  }
  .square & {
    height: 54px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  display: block;
  background: transparent;
  border: 0;
`;

export default SearchBox;