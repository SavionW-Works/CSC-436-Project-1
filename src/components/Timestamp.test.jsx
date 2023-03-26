import { describe, it, expect, test, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Timestamp from './Timestamp';

describe('Timestamp is rendered successfully', () => {
	beforeEach(() => {
		render(<Timestamp></Timestamp>);
	});

	test('Last Updated text is rendered', () => {
		const content = screen.getByTestId('title');

		expect(content).toHaveTextContent('Last Updated');
	});

	test('Local time text is rendered', () => {
		const content = screen.getByTestId('local time');

		expect(content).toHaveTextContent('Local Time:'); //Local Time is a header that should appear when NavBar renders
	});
});
