module.exports = function reverse (n) {
       n=n+"";
       let q=n.split('').reverse().join('');
       let w=parseInt(q, 10);
       return w;
      };   

