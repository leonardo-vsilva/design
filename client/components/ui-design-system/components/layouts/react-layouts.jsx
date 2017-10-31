import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import Button from '../../react-components/Button.js';
import SplashView from '../../react-components/SplashView.js';

class UILayoutsReact extends React.Component {

  render() {
    this.graphic = (<div className="graphic-test" />);
    this.children = (<Button
      label="Do Something"
      className="button button-is-primary"
      onClick={() => {return null}}
    />);

    return (
      <div className="wrap">
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h1>Layouts</h1>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <ul className="tabs">
              <li className="tabs-tab">
                <Link to='/ui-design-system/components/layouts' className="tabs-tab-link">CSS</Link>
              </li>
              <li className="tabs-tab tabs-tab-is-active">
                <Link to='/ui-design-system/components/layouts/react-layouts' className="tabs-tab-link">React</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h2>Zero States</h2>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <h3>Empty State</h3>
          </div>
        </div>
        <div className="row u-mb-0">
          <div className="columns small-12">
            <SplashView 
              graphic={this.graphic} 
              headlineText="Enter your empty view placeholder text here.">
              {this.children}
            </SplashView>
          </div>
        </div>
        <div className="row u-mb-5">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<SplashView 
  graphic={this.graphic} 
  headlineText="Enter your empty view placeholder text here.">
  {this.children}
</SplashView>`}> 
            </Code>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <h3>Loading State</h3>
          </div>
        </div>
        <div className="row u-mb-0">
          <div className="columns small-12">
            <SplashView headlineText="Retrieving list of databases and collections..." isLoading />
          </div>
        </div>
        <div className="row u-mb-5">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<SplashView headlineText="Retrieving list of databases and collections..." isLoading />`}> 
            </Code>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <h3>Error State</h3>
          </div>
        </div>
        <div className="row u-mb-0">
          <div className="columns small-12">
            <SplashView headlineText="Write something about what they did wrong here." isError >            
              <Button
                label="Do Something Else"
                className="button"
                onClick={() => {return null}}
              />
            </SplashView>
          </div>
        </div>
        <div className="row u-mb-5">
          <div className="columns small-12">
            <Code
              language='language-html'
              text={`<SplashView headlineText="Write something about what they did wrong here." isError >
  <Button
    label="Do Something Else"
    className="button"
  />
</SplashView>`}> 
            </Code>
          </div>
        </div>
      </div>
    );
  }
}

export default UILayoutsReact;
