import React from 'react';
import styled from 'styled-components';
import { Button } from 'styles/components/Buttons/index';
import { ThemedComponentProps } from 'types/Theme/ThemedComponentProps';
import { StrictButtonProps } from 'semantic-ui-react';
import { RouteComponentProps, withRouter } from 'react-router';

type Props = RouteComponentProps & {
  route: string;
  label: string;
};

const ThemedButton = (props: ThemedComponentProps<StrictButtonProps>) => <Button {...props} />;

const StyledButton = styled(ThemedButton)`
  border-radius: 9px;
`;

const RouteredNavigationButton = (props: Props) => {
  const onClick = () => {
    props.history.push(props.route);
  };

  return <StyledButton onClick={onClick}>{props.label}</StyledButton>;
};

export const NavigationButton = withRouter(RouteredNavigationButton);
