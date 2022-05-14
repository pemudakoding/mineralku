const renderer = require('react-test-renderer');
import DepotImage from './index'
import {Icon} from '@/Components';

it('Depot Image showed verified badge', () => {
    const component = renderer.create(<DepotImage verified/>,);
    const testInstance = component.root;

    expect(testInstance.findByType(Icon)).not.toBeFalsy();
});


it('Depot Image not showed verified badge', () => {
    const component = renderer.create(<DepotImage/>,);
    const testInstance = component.root;

    expect(testInstance.findAllByType(Icon)).toHaveLength(0);
});
