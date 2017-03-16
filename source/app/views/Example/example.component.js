import React from 'react';
import Helmet from 'react-helmet';

import { Counter } from 'app/components';

module.exports = () => 
    <section className="container">
        <Helmet title="R2G - Counter Example" />
        <Counter />
    </section>
;