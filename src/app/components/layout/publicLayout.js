import React from 'react';
import PublicHeader from "../header/publicHeader";
import {PublicLayout as Layout} from './layout'

const PublicLayout = ({ children, ...rest }) => {
    return (
      <Layout>
        <PublicHeader {...rest.location}  />
        <div className='content'>
          {children}
        </div>
      </Layout>
    )
  }

export default PublicLayout;
