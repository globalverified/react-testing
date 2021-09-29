import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import App from './App';
/* eslint-disable import/no-extraneous-dependencies */
import toJson from 'enzyme-to-json'; 

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

/*
Group the test scenario
*/
describe('Full Testing of Entire App Component', () => {
  const component = shallow(<App />);

  it('it should run App Component', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  test('it should have one heading', () => {
    expect(component.exists('h1'));// please add matcher call like .toBe(), .toEqual(), also try to add one more h1 tag and see if this work
  });

  test('heading with text "D14-Squard-6', () => {
    expect(component.find('h1').text()).toEqual('D14-Squard-6'); 
  });

  test('it should have sub heading', () => {
    expect(component.exists('h3')); // please add matcher call like .toBe(), .toEqual(), also try to add one more h3 tag and see if this work
  });

  test('it should have 1 link in sub heading', () => {
    const link = component.find('h3').exists('a');
    expect(link); // please add matcher call like .toBe(), .toEqual(), also try to add one more anchor tag and see if this work
  });

  test('it should have 3 only links in entire app', () => {
    // expect(component.find('a').length == 3); // this test never fail - please add matcher call like .toBe(), .toEqual(), also try to add one more h2 tag and see if this work
    expect(component.find('a').length).toEqual(3);
  });

  test('it should have 2 links in body', () => {
    // expect(component.find('section').find('a').length == 2); //same as above
    expect(component.find('section').find('a').length).toEqual(2); //same as above
  });

  test('first link of body should open in same tab', () => {
    const firstLink = component.find('section').find('.link-self');  
    expect(firstLink.prop('target')).toEqual('_self');  //validate first link of body
  });

  test('first link of body should open in new tab', () => {
    const secondlink = component.find('section').find('.link-newtab'); 
    expect(secondlink.prop('target')).toEqual('_blank'); //validate second open in new
  });

});

/*
Write a test cases in jest to cover below scenarios:
it should have one heading
with text "D14-Squard-6"
it should have 3 only links
it should have 2 links in body
it should have 1 link in sub heading
validate that first link of body should open in same tab 
and second open in new
 */
