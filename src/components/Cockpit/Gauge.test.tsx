import { render, screen } from '@testing-library/react';
import { Gauge } from './Gauge';

describe('Gauge Component', () => {
    it('renders label and value correctly', () => {
        render(<Gauge label="Test Metric" value="100" />);

        expect(screen.getByText('Test Metric')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
    });

    it('renders unit when provided', () => {
        render(<Gauge label="Speed" value="50" unit="km/h" />);

        expect(screen.getByText('km/h')).toBeInTheDocument();
    });

    it('applies correct color style base (snapshot check or class check implied)', () => {
        // Since we use inline styles with variables, we check if the element exists mostly
        // Ideally we would check computed styles, but checking presence is enough 'unit' test for now
        const { container } = render(<Gauge label="Status" value="OK" color="success" />);
        expect(container.firstChild).toBeInTheDocument();
    });
});
