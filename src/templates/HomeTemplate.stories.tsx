import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomeTemplate } from './HomeTemplate';

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
} as ComponentMeta<typeof HomeTemplate>;

const Template: ComponentStory<typeof HomeTemplate> = (args) => <HomeTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  navLinks: {
    pages: [
      { linkText: 'Home', linkTarget: '/' },
      { linkText: 'Services', linkTarget: '/' },
      { linkText: 'Education', linkTarget: '/' },
      { linkText: 'Team', linkTarget: '/' },
      { linkText: 'Join', linkTarget: '/' },
      { linkText: 'Contact', linkTarget: '/contact' },
      { linkText: 'Portal', linkTarget: '/' },
    ],
  },
  title: 'Berkeley Venture Capital',
  subtitle: "Cal's Only Undergraduate VC Organization",
  section1Title: 'Who are we?',
  section1Body:
    "Berkeley Venture Capital is a student-run organization that aims to develop students' interest in venture capital and startup activity on campus. We felt the need to address Berkeley students' ingenuity in engineering, analysis and business management with an equally developed venture capital student organization to serve student's needs when exploring the Bay Area's VC landscape.",
  section2Title: 'Our Pillars',
  section2Body:
    'Our core activities are guided by our core goals: Educating and Developing our members, while building a Community between ourselves and our collaborators.',
  section2Cards: [
    [
      'Education',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur sed et at aliquet. Dignissim suspendisse tellus pellentesque erat et elementum eu egestas. Posuere malesuada odio purus feugiat purus volutpat. Ipsum.',
    ],
    [
      'Services',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur sed et at aliquet. Dignissim suspendisse tellus pellentesque erat et elementum eu egestas. Posuere malesuada odio purus feugiat purus volutpat. Ipsum.',
    ],
    [
      'Community',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur sed et at aliquet. Dignissim suspendisse tellus pellentesque erat et elementum eu egestas. Posuere malesuada odio purus feugiat purus volutpat. Ipsum.',
    ],
  ],
  section3Title: 'Testimonials',
  section3Slider: [
    [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget gravida mi arcu purus. In amet cursus feugiat vulputate tellus leo. Dictum hendrerit in maecenas pulvinar magna orci purus commodo. Enim congue mi volutpat orci varius.',
      'Name Name',
    ],
  ],
  logos: ['mastercard', 'amazon', 'salesforce', 'mastercard', 'amazon', 'salesforce'],
  footerLinks: [
    'https://www.facebook.com/',
    'https://www.instagram.com/',
    'https://www.linkedin.com/',
    'email@example.com',
  ],
};
