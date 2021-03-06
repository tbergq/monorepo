import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment } from 'relay-test-utils';
import { render, act, fireEvent, waitFor } from '@tbergq/test-utils';

import ChangePasswordForm from '../ChangePasswordForm';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <RelayEnvironmentProvider environment={environment}>
    <ChangePasswordForm />
  </RelayEnvironmentProvider>
);

const getInputs = (container) => {
  const password = container.querySelector('input[name="password"]');
  const newPassword = container.querySelector('input[name="newPassword"]');
  const confirmPassword = container.querySelector('input[name="confirmPassword"]');

  return {
    password,
    newPassword,
    confirmPassword,
  };
};

it('show required warnings', async () => {
  const { container, getAllByText } = render(<TestRenderer />);

  const button = container.querySelector('button[type="submit"]');
  fireEvent.click(button);

  const errors = await waitFor(() => getAllByText(/is a required field/i));
  expect(errors).toHaveLength(3);
});

it('show error if confirm password does not match new password', async () => {
  const { container, getByText } = render(<TestRenderer />);
  const { password, newPassword, confirmPassword } = getInputs(container);

  const button = container.querySelector('button[type="submit"]');
  await act(async () => {
    await fireEvent.change(password, { target: { name: 'password', value: '123' } });
    await fireEvent.change(confirmPassword, { target: { name: 'confirmPassword', value: '1235' } });
    await fireEvent.change(newPassword, { target: { name: 'newPassword', value: '1234' } });
  });

  await act(async () => {
    await fireEvent.click(button);
  });

  const error = getByText("Passwords don't match");
  expect(error).toBeInTheDocument();
});
