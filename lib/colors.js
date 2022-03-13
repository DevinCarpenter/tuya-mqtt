class Colors
{
    red     =  '\x1b[31m%s\x1b[0m'  //Not Used
    green   =  '\x1b[32m%s\x1b[0m'  //Not Used
    yellow  =  '\x1b[33m%s\x1b[0m'  //Not Used
    blue    =  '\x1b[34m%s\x1b[0m'  //Discovery Debug Logs
    magenta =  '\x1b[35m%s\x1b[0m'  //State Debug Logs
    cyan    =  '\x1b[36m%s\x1b[0m'  //Command Debug Logs
}


module.exports = new Colors()