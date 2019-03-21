getIncompleteTaskSummaries = function (membername) {
  return fetchData()
    .then(function (data) {
      return data.tasks;
    })
    .then(function (tasks) {
      var results = [];
      for (var i = 0, len = tasks.length; i < len; i++) {
        if (tasks[i].username == membername) {
          results.push(tasks[i]);
        }
      }
      return results;
    })
    .then(function (tasks) {
      var results = [];
      for (var i = 0, len = tasks.length; i < len; i++) {
        if (!tasks[i].complete) {
          results.push(tasks[i]);
        }
      }
      return results;
    })
    .then(function (tasks) {
      var results = [], task;
      for (var i = 0, len = tasks.length; i < len; i++) {
        task = tasks[i];
        results.push({
          id: task.id,
          dueDate: task.dueDate,
          title: task.title,
          priority: task.priority
        })
      }
      return results;
    })
    .then(function (tasks) {
      tasks.sort(function (first, second) {
        var a = first.dueDate, b = second.dueDate;
        return a < b ? -1 : a > b ? 1 : 0;
      });
      return tasks;
    });
};


var getIncompleteTaskSummaries = function (membername) {
  return fetchData()
    .then(R.get('tasks'))
    .then(R.filter(R.propEq('username', membername)))
    .then(R.reject(R.propEq('complete', true)))
    .then(R.map(R.pick(['id', 'dueDate', 'title', 'priority'])))
    .then(R.sortBy(R.get('dueDate')));
};