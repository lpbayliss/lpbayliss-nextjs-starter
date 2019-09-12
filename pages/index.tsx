import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Content = styled.div`

`;

const Header = styled.h1`
  ${tw`text-red-500`}
`;

const Message = styled.p`
  ${tw`text-red-300`}
`;

export default () => {
  return (
    <Content>
      <Header><a href="https://github.com/lpbayliss">@lpbayliss</a> Starter Project</Header>
      <Message>This is a NextJs application with Typescript, Emotion (styled components) and TailwindCSS macros</Message>
    </Content>
  );
};
