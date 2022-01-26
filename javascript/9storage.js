localstorage
> Presistant Storage
> wrt to browser
> we have to remove manually

localStorage.setItem('mycity','delhi')
undefined
localStorage.getItem('mycity')
'delhi'
localStorage.removeItem('mycity')
undefined
localStorage.getItem('mycity')
null

sessionStorage
> temporary storage
> save wrt to tab
> Remove as soon as you close the tab


sessionStorage.setItem('mycity','delhi')
undefined
sessionStorage.getItem('mycity')
'delhi'
sessionStorage.removeItem('mycity')
undefined
sessionStorage.setItem('mycity','delhi')
undefined

cookies
> Save wrt to website
> expires in time

document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1489978755.1643135658; _gat_gtag_UA_131256843_1=1'
document.cookie="city=delhi; expires=Fri, 28 Jan 2022 01:00:00 UTC"
'city=delhi; expires=Fri, 28 Jan 2022 01:00:00 UTC'
document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.1489978755.1643135658; city=delhi'