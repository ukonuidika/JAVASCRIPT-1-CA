// function to show loading indicator
function showLoader() {
    document.getElementById('loaderContainer').style.display = 'block';
    
  }
  
  function hideLoader() {
    document.getElementById('loaderContainer').style.display = 'none';
    document.getElementById('pageContent').style.display = 'block';
    
  }
  
  showLoader();
  setTimeout(function() {
    hideLoader();
  }, 3000
  
  );
  
// export all functions
export const functions = {
    showLoader, 
    hideLoader
  }
  