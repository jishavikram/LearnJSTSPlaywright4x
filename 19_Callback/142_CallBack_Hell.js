// ---------- CallBack Hell or Pyrmaid of Doom ----------------

// Classic Callback Hell
getData(user => {
  getPermissions(user, permissions => {
    getDashboardConfig(permissions, config => {
      renderDashboard(config, () => {
        console.log("Dashboard fully rendered!");
      });
    });
  });
}); 

console.log("......................................................");
