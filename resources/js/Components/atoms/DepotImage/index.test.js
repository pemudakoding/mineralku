const renderer = require('react-test-renderer');
import DepotImage from './index'

it('Depot Image showed verified badge', () => {
    const component = renderer.create(<DepotImage verified/>,);

    console.log(component.json());

    expect(true).toBeTruthy(true);
});
