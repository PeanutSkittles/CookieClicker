// ==UserScript==
// @name         Cookie Clicker 2.0
// @namespace    http://tampermonkey.net/
// @version      2.23
// @description  try to take over the world!
// @author       Mike
// @match        orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// @downloadURL https://github.com/PeanutSkittles/CookieClicker/raw/main/Cookie%20Clicker%202.0.user.js
// @updateURL   https://github.com/PeanutSkittles/CookieClicker/raw/main/Cookie%20Clicker%202.0.user.js
// ==/UserScript==



var div = "";

var click_switch = true;
var click_interval;

var buy_product_switch = true;
var buy_product_interval;

var buy_upgrade_switch = true;
var buy_upgrade_interval;

var click_g_cookie_switch = true;
var click_g_cookie_interval;
var g_cookie_count = 0;

var pop_wrinkler_switch = true;
var pop_wrinkler_interval;

var all_switch = true;


var margin = '0px';

function buy_upgrades_no_bullshit()
{
    Game.storeBuyAll();
    Game.UpgradeDragon();
    var a = document.querySelector("#upgrade0").attributes[0].textContent;
    if (a == "Game.UpgradesById[69].click(event);" || a == "Game.UpgradesById[84].click(event);" || a == "Game.UpgradesById[452].click(event);")
    {
        document.querySelector("#upgrade1").click();
    }
    else
    {
        document.querySelector("#upgrade0").click();
        document.querySelector("#upgrade2").click();
    }
}

function buy_best_product()
{
   let a = document.querySelectorAll(".product.unlocked.enabled");
    a[a.length-1].click();
}

function click_and_count_g_cookie(click_g_cookie_button)
{
    var a = document.querySelector("#shimmers div");
    if(a != null)
    {
        a.click();
        g_cookie_count++;
        click_g_cookie_button.innerHTML = "Lucky Cookies: " + g_cookie_count;
    }
}

    //let div = document.getElementsByTagName("div")[17];

(function() {
    'use strict';
    let rem = document.getElementsByTagName("div");

    //div = document.querySelector('#topBar');
    div = document.querySelector('b');
//************************************************************************************************************************
    let click_button = document.createElement("button");
    click_button.innerHTML = "Cookie Clicker";
    click_button.onclick = () =>
    {
        click_button.style.backgroundColor = click_switch ? "grey" : "#FCFCFC";
        if(click_switch)
        {
         click_interval = setInterval(()=>Game.ClickCookie(),1) //click cookie
         click_switch = !click_switch;
        }
        else
        {
            clearInterval(click_interval);
            click_switch = !click_switch;
        }
    }

    div.appendChild(click_button);
    click_button.style.margin = margin;
    click_button.style.borderRadius = "4px"
//************************************************************************************************************************
    let buy_product_button = document.createElement("button");
    buy_product_button.innerHTML = "Buy Product";
    buy_product_button.onclick = () =>
    {
        buy_product_button.style.backgroundColor = buy_product_switch ? "grey" : "#FCFCFC";
        if(buy_product_switch)
        {
         buy_product_interval = setInterval(() => buy_best_product(),100); //buy unlockable product
         buy_product_switch = !buy_product_switch;
        }
        else
        {
            clearInterval(buy_product_interval);
            buy_product_switch = !buy_product_switch;
        }
    }
    div.appendChild(buy_product_button);
    buy_product_button.style.margin = margin;
    buy_product_button.style.borderRadius = "4px"
//************************************************************************************************************************
    let buy_upgrade_button = document.createElement("button");
    buy_upgrade_button.innerHTML = "Buy Upgrades";
    buy_upgrade_button.onclick = () =>
    {
        buy_upgrade_button.style.backgroundColor = buy_upgrade_switch ? "grey" : "#FCFCFC";
        if(buy_upgrade_switch)
        {
         buy_upgrade_interval = setInterval(() => buy_upgrades_no_bullshit(),10); //buy unlockable product
         buy_upgrade_switch = !buy_upgrade_switch;
        }
        else
        {
            clearInterval(buy_upgrade_interval);
            buy_upgrade_switch = !buy_upgrade_switch;
        }
    }
    div.appendChild(buy_upgrade_button);
    buy_upgrade_button.style.margin = margin;
    buy_upgrade_button.style.borderRadius = "4px"
//************************************************************************************************************************
    let click_g_cookie_button = document.createElement("button");
    click_g_cookie_button.innerHTML = "Lucky Cookies: " + g_cookie_count;
    click_g_cookie_button.onclick = () =>
    {
        click_g_cookie_button.style.backgroundColor = click_g_cookie_switch ? "grey" : "#FCFCFC";
        if(click_g_cookie_switch)
        {
         click_g_cookie_interval = setInterval(() => click_and_count_g_cookie(click_g_cookie_button),10); //click secret cookie
         click_g_cookie_switch = !click_g_cookie_switch;
        }
        else
        {
            clearInterval(click_g_cookie_interval);
            click_g_cookie_switch = !click_g_cookie_switch;
        }
    }
    div.appendChild(click_g_cookie_button);
    click_g_cookie_button.style.margin = margin;
    click_g_cookie_button.style.borderRadius = "4px"
//************************************************************************************************************************
    let pop_wrinkler_button = document.createElement("button");
    pop_wrinkler_button.innerHTML = "Pop Wrinklers";
    pop_wrinkler_button.onclick = () =>
    {
        pop_wrinkler_button.style.backgroundColor = pop_wrinkler_switch ? "grey" : "#FCFCFC";
        if(pop_wrinkler_switch)
        {
            pop_wrinkler_interval = setInterval(() => Game.PopRandomWrinkler(),1800000);//pop wrinklers every 30 min
            pop_wrinkler_switch = !pop_wrinkler_switch;
        }
        else
        {
            clearInterval(pop_wrinkler_interval);
            pop_wrinkler_switch = !pop_wrinkler_switch;
        }
    }
    div.appendChild(pop_wrinkler_button);
    pop_wrinkler_button.style.margin = margin;
    pop_wrinkler_button.style.borderRadius = "4px"
//************************************************************************************************************************
    let all_button = document.createElement("button");
    all_button.innerHTML = "All";
    all_button.onclick = () =>
    {
        all_button.style.backgroundColor = all_switch ? "grey" : "#FCFCFC";
        if(all_switch)
        {
            pop_wrinkler_button.click();
            click_g_cookie_button.click();
            buy_upgrade_button.click();
            buy_product_button.click();
            click_button.click();
            all_switch = !all_switch;
        }
        else
        {
            pop_wrinkler_button.click();
            click_g_cookie_button.click();
            buy_upgrade_button.click();
            buy_product_button.click();
            click_button.click();
            all_switch = !all_switch;
        }
    }
    div.appendChild(all_button);
    all_button.style.margin = margin;
    all_button.style.borderRadius = "4px"
//************************************************************************************************************************

})();