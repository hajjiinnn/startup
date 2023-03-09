# NOTES

# FONTS
Use https://fonts.google.com/ for free fonts
 example: 
  @import url('https://fonts.googleapis.com/css2?family=Source Code Pro:wght@300&display=swap');
  body {
    font-family: 'Source Code Pro';
  }

### Jenson's Midterm Review
Q1:   HTML `<div>` does?        creates a division element  

Q1.5: HTML `<b>` means?       bring attention  

Q2:   To point to another DNS record, you should use the following DNS record type:           CNAME (think of it as an alias)  

Q2.5: What would you use to point to a literal IP address:      use an A record  

Q3:   t/f You can use this CSS to load fonts from Google:                 true  

            @import url('https://fonts.googleapis.com/css?family=Quicksand');

Q4:   What will the following output?                burger fries taco shake noodles  

            const p = new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log('taco');
                resolve(true);
              }, 10000);
            });
            console.log('burger');

            p
            .then((result) => console.log('shake'))
            .catch((e) => console.log('salad'))
            .finally(() => console.log('noodles'))

            console.log('fries');
Q5:   Which of the following is valid JSON?   {"x":3}  Key value must always be in double quotes   
      `{x:3}   {"x":3}   {'x':3}   {"x":undefined}`

Q6:   How would you turn only the BYU text blue using CSS?  `div.header {color:blue}`  
```
<div>other</div>
<div> class="header">BYU</div>
```

Q7:   

Q8:   

Q9:   

Q10:   

Q11:  

Q12:  

Q13:  

Q14:  

Q15:  

Q16:  

Q17:  

Q18:  

Q19:  

Q20:  

Q21:  

Q22:  

Q23:  







#### startup
startup assignment cs260 W23
 
Pitch: 
You've seen people with unconventional pets on TV. Some have monkeys, others lions and tigers. Now, it's your turn! Through this application, you can adopt your own virtual pets and watch them interact with your friends' pets too! You will be able to choose the species of your new pet, name them, and even accessorize them. All pets that you create will be saved under your account so you can keep track of your adorable critters. 

[MODEL](https://github.com/hajjiinnn/startup/blob/main/Untitled_Artwork.pdf)

Key features include:
-secure login via HTTPS
-ability to choose, name, and accessorize pet
-ability to see pets in their habitat
-ability to edit pets in your account
