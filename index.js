$(function(){


    function initDataAsync(){
        var that=this;
        async.parallel({

            teacherInfo:function(callback){
                getTeacherInfo(function(result){
                    if(!result) {
                        return;
                    }
                    callback(null,result);
                });

            },
            studentInfo:function(callback){
                getStudentInfo(function(result){
                    if(!result) {
                        return;
                    }
                    callback(null,result);
                });

            },
            courseInfo:function(callback){
                getCourseInfo(function(result){
                    if(!result) {
                        return;
                    }
                    callback(null,result);
                });

            },

        },function (err,results) {

            var totalData={
                teacherInfo: results.teacherInfo,
                studentInfo: results.studentInfo,
                courseInfo: results.courseInfo,
            };
            var totalStr= template('rem-template',{totalData:totalData});
            $('#main-container').html(totalStr);

        });
    };



    function getTeacherInfo(callback) {
        $.getJSON('data/teachers.json', null, function (res) {
            callback && callback(res);
        });
    }

    function getStudentInfo(callback) {
        $.getJSON('data/students.json', null, function (res) {
            callback && callback(res);
        });
    }


    function getCourseInfo(callback) {
        $.getJSON('data/courses.json', null, function (res) {
            callback && callback(res);
        });
    }


    initDataAsync();

});
