/**
 * Progreso y desbloqueo secuencial de clases (localStorage hasta login real).
 */
window.VoroxClassProgress = (function () {
  'use strict';

  function storageKey(courseId) {
    return 'vorox-progress-' + courseId;
  }

  function getCompleted(courseId) {
    try {
      var raw = localStorage.getItem(storageKey(courseId));
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function isComplete(courseId, lessonNum) {
    return getCompleted(courseId).indexOf(lessonNum) !== -1;
  }

  function isUnlocked(courseId, lessonNum) {
    if (lessonNum <= 1) return true;
    return isComplete(courseId, lessonNum - 1);
  }

  function markComplete(courseId, lessonNum) {
    var done = getCompleted(courseId);
    if (done.indexOf(lessonNum) === -1) {
      done.push(lessonNum);
      done.sort(function (a, b) { return a - b; });
      localStorage.setItem(storageKey(courseId), JSON.stringify(done));
    }
  }

  function getProgressPercent(courseId, totalLessons) {
    if (!totalLessons) return 0;
    return Math.round((getCompleted(courseId).length / totalLessons) * 100);
  }

  return {
    storageKey: storageKey,
    getCompleted: getCompleted,
    isComplete: isComplete,
    isUnlocked: isUnlocked,
    markComplete: markComplete,
    getProgressPercent: getProgressPercent
  };
})();
