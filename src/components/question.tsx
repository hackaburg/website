import styled from "@emotion/styled";
import * as React from "react";

const QuestionContainer = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
`;

interface IQuestionProps {
  children: React.ReactNode;
  title: string;
}

export const Question = ({ children, title }: IQuestionProps) => (
  <QuestionContainer>
    <Title>{title}</Title>
    {children}
  </QuestionContainer>
);
