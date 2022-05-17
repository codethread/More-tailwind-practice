import { JobsPage } from './Jobs';
import { text } from '../hooks/useText';
import { render, screen } from '../testHelpers/rtl';
import userEvent from '@testing-library/user-event';
import { outOfWorkStatus } from './jobs/info';

describe('Jobs Page', () => {
	it('should render the Jobs Page', () => {
		render(<JobsPage />);

		expect(screen.getByText(text.jobs.header)).toBeInTheDocument();
	});

	describe('when a person has no jobs', () => {
		it('should render 0 jobs', () => {
			render(<JobsPage />);

			expect(screen.getByLabelText(text.jobs.noJob.heading)).toBeInTheDocument();
			expect(screen.queryByText(text.jobs.jobInput.heading(1))).not.toBeInTheDocument();
		});

		it('should allow setting a current status', () => {
			render(<JobsPage />);

			userEvent.selectOptions(screen.getByLabelText(text.jobs.noJob.heading), outOfWorkStatus[0]);
		});
	});

	// etc
});
