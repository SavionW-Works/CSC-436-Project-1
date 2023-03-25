import axios from 'axios';
import { useState, useEffect } from 'react';
import { describe, it, expect, test, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Timestamp from './Timestamp';

describe('Timestamp is rendered successfully', () => {
	beforeEach(() => {
		render(<Timestamp></Timestamp>);
	});

	test('Last Updated text is rendered', () => {
		const title = screen.getByTestId('title');

		expect(title).toHaveTextContent('Last Updated'); //Crypto Conversion is a header that should appear when NavBar renders
	});

	test('Local time text is rendered', () => {
		const target = screen.getByTestId('local time');

		expect(target).toHaveTextContent('Local Time: '); //Crypto Conversion is a header that should appear when NavBar renders
	});
});
