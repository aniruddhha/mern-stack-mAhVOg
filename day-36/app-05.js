const device = 'mobile'
const os = 'android'

if( device == 'mobile' ) {

    if( os == 'android' ) {
        console.log('Updates are available')
    } else {
        if(os == 'iOS') {
            console.log('Updates not available')
        }
    }
}