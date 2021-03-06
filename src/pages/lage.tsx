//#region > Imports
//> React
// Contains all the functionality necessary to define React components
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {fields} from '@jaenjs/jaen'

//> Components
import ImageTopSection from '../components/organisms/ImageTopSection'
import {Footer, Navbar} from '../components/molecules'

//> CSS
import {JaenTemplate} from '@jaenjs/jaen/src/types'
import {Box} from '@chakra-ui/layout'

import {ResponsiveImage} from '../components/layout/ResponsiveImage'
import {CookieModal} from '../components/molecules'
//#endregion

//#region > Components
const LocationPage: JaenTemplate = () => {
  return (
    <ResponsiveImage>
      <CookieModal />
      <Box
        as="section"
        id="locationpage"
        paddingBottom="195px"
        overflow="hidden"
        paddingTop={{base: '75px', md: '140px'}}
        minHeight="100vh">
        <Navbar />
        <ImageTopSection
          head1={
            <fields.TextField
              fieldName="locationhead"
              initValue="<p>Überschrift</p>"
              rtf={false}
            />
          }
          img1={
            <fields.ImageField
              fieldName="locationimage"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'locationimg'
              }}
              className="responsiveImage"
            />
          }
          text1={
            <fields.TextField
              fieldName="locationrichtext"
              initValue="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
            />
          }
        />

        <Footer />
      </Box>
    </ResponsiveImage>
  )
}

LocationPage.TemplateName = 'LocationPage'
//#endregion

//#region > Exports
export default LocationPage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
